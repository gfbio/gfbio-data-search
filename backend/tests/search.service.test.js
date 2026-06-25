/**
 * Integration tests for search.service: the result-bearing search paths must
 * carry per-dataset validation on each hit, while the stats-only path (no hits)
 * is unaffected and never calls the aggregator.
 *
 * Both the Elasticsearch client and the shared axios instance (used by the
 * validation-stats client) are mocked — no live ES, no live aggregator.
 */

jest.mock("../src/config/elasticsearch.config", () => ({ search: jest.fn() }));
jest.mock("../src/config/axios.config", () => ({ post: jest.fn() }));

const esClient = require("../src/config/elasticsearch.config");
const axiosInstance = require("../src/config/axios.config");
const searchService = require("../src/services/search.service");

const URN = "urn:gfbio.org:abcd:1_204_375";
const summary = { identifier: URN, dataset_id: 204, quality_score: 0.86 };

function esBodyWithHit() {
  return {
    took: 3,
    hits: {
      total: 1,
      hits: [{ _id: "d1", _source: { abcdDatasetIdentifier: URN } }],
    },
    aggregations: { dataProvider: { buckets: [] } },
  };
}

describe("executeSearch", () => {
  test("attaches validation to each hit from the aggregator", async () => {
    esClient.search.mockResolvedValue({ body: esBodyWithHit() });
    axiosInstance.post.mockResolvedValue({ data: { results: { [URN]: summary } } });

    const body = await searchService.executeSearch("moss", [], 0, 10);

    expect(body.hits.hits[0].validation).toEqual(summary);
    expect(axiosInstance.post).toHaveBeenCalledTimes(1);
  });

  test("returns hits without validation (no throw) when the aggregator is down", async () => {
    esClient.search.mockResolvedValue({ body: esBodyWithHit() });
    axiosInstance.post.mockRejectedValue(new Error("ECONNREFUSED"));

    const body = await searchService.executeSearch("moss", [], 0, 10);

    expect(body.hits.hits[0].validation).toBeUndefined();
    expect(body.hits.hits[0]._source.abcdDatasetIdentifier).toBe(URN);
  });
});

describe("executeSearchWithoutAggs", () => {
  test("attaches validation to each hit from the aggregator", async () => {
    esClient.search.mockResolvedValue({ body: esBodyWithHit() });
    axiosInstance.post.mockResolvedValue({ data: { results: { [URN]: summary } } });

    const body = await searchService.executeSearchWithoutAggs("moss", [], 0, 10);

    expect(body.hits.hits[0].validation).toEqual(summary);
  });
});

describe("executeStatsOnly", () => {
  test("returns only aggregations and never calls the aggregator", async () => {
    esClient.search.mockResolvedValue({
      body: { aggregations: { dataProvider: { buckets: [{ key: "PANGAEA" }] } } },
    });

    const aggs = await searchService.executeStatsOnly("moss", []);

    expect(aggs.dataProvider.buckets[0].key).toBe("PANGAEA");
    expect(axiosInstance.post).not.toHaveBeenCalled();
  });
});
