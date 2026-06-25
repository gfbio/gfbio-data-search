/**
 * Tests for the validation-stats enrichment service.
 *
 * This service is the search backend's client for the aggregator's public
 * /api/v1/validation-stats endpoint. It must:
 *   - batch a result page's abcdDatasetIdentifier values into ONE aggregator call,
 *   - attach the returned summary onto each matching hit as `hit.validation`,
 *   - and degrade gracefully: any aggregator failure leaves the hits intact and
 *     never throws (search must never break because validation is unavailable).
 *
 * The shared axios instance is mocked, so no live aggregator is contacted.
 */

jest.mock("../src/config/axios.config", () => ({ post: jest.fn() }));

const axiosInstance = require("../src/config/axios.config");
const { AGGREGATOR_URL } = require("../src/config/environment");
const {
  fetchValidationStats,
  enrichHitsWithValidation,
} = require("../src/services/validationStats.service");

const STATS_URL = AGGREGATOR_URL + "/api/v1/validation-stats";
const URN_A = "urn:gfbio.org:abcd:1_204_375";
const URN_B = "urn:gfbio.org:abcd:1_205_380";

const summaryA = { identifier: URN_A, dataset_id: 204, quality_score: 0.86 };

function hit(identifier, extra = {}) {
  return { _id: "x", _source: { abcdDatasetIdentifier: identifier, ...extra } };
}

function body(hits) {
  return { hits: { total: hits.length, hits } };
}

describe("fetchValidationStats", () => {
  test("posts identifiers to the aggregator and returns the results map", async () => {
    axiosInstance.post.mockResolvedValue({ data: { results: { [URN_A]: summaryA } } });

    const result = await fetchValidationStats([URN_A]);

    expect(axiosInstance.post).toHaveBeenCalledTimes(1);
    const [url, payload, options] = axiosInstance.post.mock.calls[0];
    expect(url).toBe(STATS_URL);
    expect(payload).toEqual({ identifiers: [URN_A] });
    expect(options).toHaveProperty("timeout");
    expect(options.timeout).toBeGreaterThan(0);
    expect(result).toEqual({ [URN_A]: summaryA });
  });

  test("returns {} for an empty identifier list without calling the aggregator", async () => {
    const result = await fetchValidationStats([]);
    expect(result).toEqual({});
    expect(axiosInstance.post).not.toHaveBeenCalled();
  });

  test("degrades to {} (no throw) when the aggregator call rejects", async () => {
    axiosInstance.post.mockRejectedValue(new Error("ECONNREFUSED"));
    await expect(fetchValidationStats([URN_A])).resolves.toEqual({});
  });

  test("returns {} when the response carries no results object", async () => {
    axiosInstance.post.mockResolvedValue({ data: {} });
    await expect(fetchValidationStats([URN_A])).resolves.toEqual({});
  });
});

describe("enrichHitsWithValidation", () => {
  test("attaches validation to matching hits and leaves others untouched", async () => {
    axiosInstance.post.mockResolvedValue({ data: { results: { [URN_A]: summaryA } } });

    const input = body([hit(URN_A), hit(URN_B)]);
    const out = await enrichHitsWithValidation(input);

    expect(out.hits.hits[0].validation).toEqual(summaryA);
    // URN_B had no summary in the response -> stays clean (non-aggregator card).
    expect(out.hits.hits[1].validation).toBeUndefined();
  });

  test("tolerates an array-valued abcdDatasetIdentifier (ES multi-value)", async () => {
    axiosInstance.post.mockResolvedValue({ data: { results: { [URN_A]: summaryA } } });

    const out = await enrichHitsWithValidation(body([hit([URN_A, "other"])]));

    expect(out.hits.hits[0].validation).toEqual(summaryA);
    // The first array element was used as the lookup key.
    expect(axiosInstance.post.mock.calls[0][1]).toEqual({ identifiers: [URN_A] });
  });

  test("makes no aggregator call when there are no hits", async () => {
    const input = body([]);
    const out = await enrichHitsWithValidation(input);
    expect(out).toBe(input);
    expect(axiosInstance.post).not.toHaveBeenCalled();
  });

  test("makes no aggregator call when no hit carries an identifier", async () => {
    const noId = { _id: "y", _source: { citation_title: "no urn here" } };
    await enrichHitsWithValidation(body([noId]));
    expect(axiosInstance.post).not.toHaveBeenCalled();
  });

  test("sends each identifier only once even if repeated across hits", async () => {
    axiosInstance.post.mockResolvedValue({ data: { results: {} } });

    await enrichHitsWithValidation(body([hit(URN_A), hit(URN_A), hit(URN_B)]));

    expect(axiosInstance.post).toHaveBeenCalledTimes(1);
    const sent = axiosInstance.post.mock.calls[0][1].identifiers;
    expect(sent.sort()).toEqual([URN_A, URN_B].sort());
  });

  test("returns hits without validation (no throw) when the aggregator is down", async () => {
    axiosInstance.post.mockRejectedValue(new Error("timeout"));

    const out = await enrichHitsWithValidation(body([hit(URN_A)]));

    expect(out.hits.hits[0].validation).toBeUndefined();
    expect(out.hits.hits[0]._source.abcdDatasetIdentifier).toBe(URN_A);
  });
});
