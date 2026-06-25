// Validation-stats enrichment: decorate search hits with per-dataset validation
// numbers from the aggregator's public /api/v1/validation-stats endpoint.
//
// The search index never carries validation results (the data centers declined
// to bind validation to harvesting), so each result page is enriched at render
// time: a page's abcdDatasetIdentifier values are batched into ONE aggregator
// call and the returned summary is attached onto each matching hit. The call is
// best-effort — any failure (timeout, non-2xx, network) leaves the hits intact
// and never throws, so search never breaks because validation is unavailable.

const axiosInstance = require("../config/axios.config");
const appRoot = require("app-root-path");
const {
  AGGREGATOR_URL,
  AGGREGATOR_TIMEOUT_MS,
} = require(appRoot + "/src/config/environment");

const VALIDATION_STATS_PATH = "/api/v1/validation-stats";

/**
 * Pull the abcdDatasetIdentifier off a hit's _source, tolerating ES array-valued
 * fields (a multi-valued keyword is returned as an array). Returns undefined when
 * the hit has no identifier (e.g. non-ABCD sources like PANGAEA / ENA / GBIF).
 *
 * @param {Object} hit A single Elasticsearch hit.
 * @returns {string|undefined} The dataset identifier, or undefined.
 */
function identifierOf(hit) {
  const raw = hit && hit._source ? hit._source.abcdDatasetIdentifier : undefined;
  if (Array.isArray(raw)) {
    return raw.length ? raw[0] : undefined;
  }
  return raw || undefined;
}

/**
 * POST a batch of identifiers to the aggregator and return its results map.
 * Never throws: any failure resolves to an empty map (graceful degradation).
 *
 * @param {string[]} identifiers abcdDatasetIdentifier term values.
 * @returns {Promise<Object>} Map of identifier -> validation summary (or {}).
 */
async function fetchValidationStats(identifiers) {
  if (!identifiers || identifiers.length === 0) {
    return {};
  }
  try {
    const response = await axiosInstance.post(
      AGGREGATOR_URL + VALIDATION_STATS_PATH,
      { identifiers },
      { timeout: AGGREGATOR_TIMEOUT_MS }
    );
    return (response && response.data && response.data.results) || {};
  } catch (error) {
    // Best-effort: log and continue with no validation data.
    console.warn(
      "Validation-stats enrichment unavailable, returning results without it:",
      error.message
    );
    return {};
  }
}

/**
 * Enrich an Elasticsearch response body in place: attach `hit.validation` to each
 * hit whose identifier has a matching aggregator summary. Hits without an
 * identifier or without a summary are left untouched, so non-aggregator cards
 * stay clean. Makes no aggregator call when the page has no identifiers.
 *
 * @param {Object} body The raw ES response body ({ hits: { hits: [...] } }).
 * @returns {Promise<Object>} The same body, with validation attached where known.
 */
async function enrichHitsWithValidation(body) {
  const hits =
    body && body.hits && Array.isArray(body.hits.hits) ? body.hits.hits : [];
  if (hits.length === 0) {
    return body;
  }

  const identifiers = [...new Set(hits.map(identifierOf).filter(Boolean))];
  if (identifiers.length === 0) {
    return body;
  }

  const stats = await fetchValidationStats(identifiers);
  for (const hit of hits) {
    const identifier = identifierOf(hit);
    if (identifier && stats[identifier]) {
      hit.validation = stats[identifier];
    }
  }
  return body;
}

module.exports = {
  identifierOf,
  fetchValidationStats,
  enrichHitsWithValidation,
};
