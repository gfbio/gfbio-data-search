const axios = require("axios");
const esClient = require("../config/elasticsearch.config");

const { cartesianProduct } = require("cartesian-product-multiple-arrays");
const {
  applyBoost,
  getCompleteQuery,
  getQuery,
  extractHighlightedSearch,
} = require("../utils/query.utils");

const GFBioTS_URL = process.env.GFBIOTS_URL;

/**
 * Search for keywords and build combinations of keywords.
 *
 * @param {string[]} keywords - An array of keywords.
 * @returns {Object} - An object containing termData and lastArr.
 */
async function searchKeywords(keywords) {
  const keywordsCombination = [];
  keywords.forEach(function (item) {
    const insideArr = item.split("+");
    keywordsCombination.push(insideArr);
  });
  const flatKeyWords = keywordsCombination.flat();
  const response = [];

  let axiosArray = [];
  let termData = [];

  for (let i = 0; i < flatKeyWords.length; i++) {
    axiosArray.push(
      axios.get(
        GFBioTS_URL + "search?query=" + flatKeyWords[i] + "&match_type=exact"
      )
    );
  }

  return axios.all(axiosArray).then(
    axios.spread((...responses) => {
      for (let i = 0; i < axiosArray.length; i++) {
        let allKeyWords = [flatKeyWords[i]];
        const results = responses[i].data.results;
        results.forEach(function (item) {
          for (const [key, value] of Object.entries(item)) {
            if (
              item.sourceTerminology !== "GEONAMES" &&
              item.sourceTerminology !== "RIVERS_DE"
            ) {
              if (key === "commonNames" || key === "synonyms") {
                let keyword = value.toString();
                keyword = keyword.split(",");
                for (let t = 0; t < keyword.length; t++) {
                  keyword[t] = "'" + keyword[t] + "'";
                  if (
                    !keyword[t].startsWith("(") &&
                    !keyword[t].startsWith("'")
                  ) {
                    keyword[t] = "'" + keyword[t] + "'";
                  }
                }
                allKeyWords = allKeyWords.concat(keyword);
              }
            }
          }
          if (
            item.sourceTerminology !== "GEONAMES" &&
            item.sourceTerminology !== "RIVERS_DE"
          ) {
            termData.push(item);
          }
        });
        response.push(allKeyWords);
      }

      let z = 0;
      for (let i = 0; i < keywordsCombination.length; i++) {
        for (let j = 0; j < keywordsCombination[i].length; j++) {
          keywordsCombination[i][j] = response[z++];
        }
      }
      let cartesianProductAll = [];
      for (let t = 0; t < keywordsCombination.length; t++) {
        cartesianProductAll.push(cartesianProduct(...keywordsCombination[t]));
      }
      cartesianProductAll = cartesianProductAll.flat();
      const lastArr = [];
      for (let t = 0; t < cartesianProductAll.length; t++) {
        lastArr.push(cartesianProductAll[t].join(" + "));
      }

      return {
        termData,
        lastArr,
      };
    })
  );
}

/**
 * Perform a semantic search based on the provided query, filters, from, and size.
 *
 * @param {string} query - The query to search.
 * @param {number} from - The start index of the results.
 * @param {number} size - The number of results to retrieve.
 * @param {string[]} filter - An array of filters.
 * @returns {Promise} - A promise that resolves with the search results.
 */
async function performSemanticSearch(query, from, size, filter) {
  try {
    // Construct the Elasticsearch query using utility functions.
    const filteredQuery = getQuery(query, filter); // Adapt this if your function name or parameters differ.
    const boostedQuery = applyBoost(filteredQuery);
    const finalQuery = getCompleteQuery(boostedQuery, from, size);

    // Prepare the search query for Elasticsearch.
    const searchQuery = {
      index: process.env.ELASTIC_INDEX_NAME, // Ensure your environment variable is correctly set.
      from: from,
      size: size,
      body: finalQuery,
    };

    // Execute the search query using the Elasticsearch client.
    const { body } = await esClient.search(searchQuery);
    return body; // Return the full response body.
  } catch (error) {
    console.error("Error performing semantic search:", error);
    throw error; // Ensure the error is caught and handled appropriately.
  }
}

module.exports = {
  searchKeywords,
  performSemanticSearch,
  extractHighlightedSearch,
};
