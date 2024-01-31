const {
  searchKeywords,
  performSemanticSearch,
  extractHighlightedSearch,
} = require("../services/semanticSearch.service");

const axios = require("../config/axios.config");
const GFBioTS_URL = process.env.GFBIOTS_URL;

/**
 * Perform a semantic search based on the provided keywords and filters.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const semanticSearch = async (req, res) => {
  try {
    const keywords = req.body.queryterm;
    const { termData, lastArr } = await searchKeywords(keywords);

    let filter = [];
    let from = 0;
    let size = 0;

    if (req.body.from !== "undefined" && req.body.from >= 0) {
      from = req.body.from;
    }

    if (req.body.size !== "undefined" && req.body.size >= 0) {
      size = req.body.size;
    }

    if (req.body.filter !== "undefined") {
      filter = req.body.filter;
    }

    const resp = await performSemanticSearch(lastArr, from, size, filter);
    resp.data.termData = termData;

    const extendedTerms = [];
    const result = resp.data.hits.hits;
    for (let i = 0, iLen = result.length; i < iLen; i++) {
      const highlight = result[i].highlight;
      if (highlight != null) {
        const highlightArr = extractHighlightedSearch(highlight);
        let isAdded = false;
        for (
          let iHighlight = 0;
          iHighlight < highlightArr.length;
          iHighlight++
        ) {
          for (
            let iExtended = 0;
            iExtended < extendedTerms.length;
            iExtended++
          ) {
            if (
              extendedTerms[iExtended].toLowerCase() ===
              highlightArr[iHighlight].toLowerCase()
            ) {
              isAdded = true;
            }
          }
          if (!isAdded) {
            extendedTerms.push(highlightArr[iHighlight]);
          }
        }
      }
    }

    resp.data.lastItem = extendedTerms;

    res.set("Content-Type", "application/json");
    res.status(200).send(resp.data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: "Error",
      err,
    });
  }
};

/**
 * Perform a semantic narrow search.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const semanticNarrow = async (req, res) => {
  //get term from the body
  const id = req.body.id;
  const uri = req.body.uri;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios
    .get(GFBioTS_URL + id + "/narrower?uri=" + uri, config)
    .then((resp) => {
      console.log(resp.data);
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: "Error",
        err,
      });
    });
};

/**
 * Perform a semantic broaden search.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const semanticBroaden = async (req, res) => {
  //get term from the body
  const id = req.body.id;
  const uri = req.body.uri;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios
    .get(GFBioTS_URL + id + "/broader?uri=" + uri, config)
    .then((resp) => {
      console.log(resp.data);
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: "Error",
        err,
      });
    });
};

module.exports = {
  semanticSearch,
  semanticBroaden,
  semanticNarrow,
};
