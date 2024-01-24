// External Module Imports
const express = require("express");
const axios = require("axios");
const fs = require("fs");
const JSZip = require("jszip");
const http = require("http");
const https = require("https");
const bodyParser = require("body-parser").json();
const compression = require("compression");
const NodeCache = require("node-cache");

// Local Module Imports
const basket = require("./controllers/basket.controller");
// var search = require('./connectionElastic'); // Currently not needed

// Environment Variables
const GFBioTS_URL = process.env.GFBIOTS_URL;
const Pangaea_URL = process.env.PANGAEA_URL;
const Pangaea_Suggest_URL = process.env.PANGAEA_SUGGEST_URL;
const TERMINOLOGY_SUGGEST_URL = process.env.TERMINOLOGY_SUGGEST_URL;
const COLLECTIONS_API_URL = process.env.COLLECTIONS_API_URL;
const COLLECTIONS_API_TOKEN = process.env.COLLECTIONS_API_TOKEN;
const VAT_ROOT_URL = process.env.VAT_ROOT_URL;

// Utility Imports
const { cartesianProduct } = require("cartesian-product-multiple-arrays");

// Express App and Router Setup
const app = express();
app.use(compression()); // Enable compression middleware
const router = express.Router();

// Axios Instance with Keep-Alive
const axiosInstance = axios.create({
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
});

// Node Cache Instance
const myCache = new NodeCache({ stdTTL: 300 }); // Cache for 300 seconds

router.post("/search", bodyParser, (req, res) => {
  // Extract parameters from the request body
  const keyword = req.body.queryterm;
  let filter = req.body.filter || [];
  let from = req.body.from || 0;
  let size = req.body.size || 10;

  // Validate and parse parameters as needed
  from = parseInt(from, 10);
  size = parseInt(size, 10);

  // Build the query with filters and boosting
  const filteredQuery = getFilteredQuery(keyword, filter);
  const boostedQuery = applyBoost(filteredQuery);
  const data = getCompleteQuery(boostedQuery, from, size);

  // Generate a unique cache key based on the query
  const cacheKey = JSON.stringify({ keyword, filter, from, size });

  // Check if the data is in cache
  const cachedData = myCache.get(cacheKey);
  if (cachedData) {
    // console.log("Cache hit for key:", cacheKey);
    return res.status(200).send(cachedData);
  } else {
    // console.log("Cache miss for key:", cacheKey);
  }

  // Configuration for the Axios request
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Serialize the data for logging the request size
  // const requestData = JSON.stringify(data);
  // console.log("Request Size (bytes):", Buffer.from(requestData).length);

  // Perform the search using the Axios instance with keep-alive
  axiosInstance
    .post(Pangaea_URL, data, config)
    .then((resp) => {
      // Serialize the response data for logging the response size
      const responseData = JSON.stringify(resp.data);
      // console.log("Response Size (bytes):", Buffer.from(responseData).length);

      // Save the response in the cache before sending it
      myCache.set(cacheKey, resp.data);
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "Error",
        err,
      });
    });
});

router.post("/suggest-pan", (req, res) => {
  const term = req.body.term;

  const data = {
    suggest: {
      text: term,
      completion: {
        field: "suggest",
        size: 12,
      },
    },
  };

  // Use the shared axiosInstance with keep-alive configuration
  axiosInstance
    .post(Pangaea_Suggest_URL, data)
    .then((resp) => {
      //console.log(`Status: ${resp.status}`);
      // console.log('Body: ', resp.data);
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "Error",
        err,
      });
    });
});

/**
 * POST /suggest-Terminology
 * Terminology Suggest service for semantic search
 */
/**
 * @swagger
 * /gfbio/suggest-ter:
 *   post:
 *     description: Returns query term suggestions for given characters from Terminology service
 *     tags: [Search GFBio - Elastic index]
 *     summary: returns query term suggestions
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: term
 *         description: the characters for which suggestions are needed
 *         schema:
 *            type: object
 *            required:
 *              - term
 *            properties:
 *              term:
 *                type: string
 *                example: quer
 *     responses:
 *       201:
 *         description: object with key 'suggest' containing an array with labels
 */
router.post("/suggest-ter", (req, res) => {
  // console.log('/suggest:' + req.body.term);
  //get the term from the body
  const term = req.body.term;

  //post the request to elasticsearch
  return axios
    .get(TERMINOLOGY_SUGGEST_URL + "?query=" + term + "*&match_type=exact")
    .then((resp) => {
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      console.log(err);

      return res.status(500).json({
        msg: "Error",
        err,
      });
    });
});

/**
 * POST /basketDownload
 * download the basket
 */
/**
 * @swagger
 * /gfbio/basketDownload:
 *   post:
 *     description: downloads the chosen datasets
 *     tags: [Search GFBio - Elastic index]
 *     summary: downloads the chosen datasets
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: basket
 *         description: the object contains array of datasets
 *         schema:
 *            type: object
 *            required:
 *              - basket
 *            properties:
 *              basket:
 *                type: array
 *                items:
 *                   type: object
 *     responses:
 *       201:
 *         description: the browser stars to download
 */
router.post("/basketDownload", (req, res) => {
  // res.status(200).send(req.body.basket);
  const selectedBasket = req.body.basket;

  const zip = new JSZip();
  const axiosArray = [];
  let names = [];
  selectedBasket.forEach(function (result, index) {
    // metadata
    const identifier = result["dcIdentifier"].replace(
      /[` ~!@#$%^&*()_|+\-=÷¿?;:'",.<>{}\[\]\\\/]/gi,
      ""
    );
    zip.file(identifier + "_metadata.xml", result["xml"]);

    // data
    if (result.linkage.data) {
      names.push("");

      const datalink = decodeURIComponent(result.linkage.data);

      axiosArray.push(
        axios.get(datalink, {
          responseType: "arraybuffer",
          headers: { "Content-Type": "text/plain; charset=x-user-defined" },
        })
      );
    }

    // multimedia
    if (result.linkage.multimedia) {
      for (let i = 0; i < result.linkage.multimedia.length; i++) {
        names.push(
          new URL(result.linkage.multimedia[i].url).pathname.split("/").pop()
        );

        const multimedialink = decodeURIComponent(
          result.linkage.multimedia[i].url
        );

        axiosArray.push(
          axios.get(multimedialink, {
            responseType: "arraybuffer",
          })
        );
      }
    }
  });

  // console.log("length of array: " + axiosArray.length);

  axios
    .all(axiosArray)
    .then(
      axios.spread((...responses) => {
        for (let i = 0; i < axiosArray.length; i++) {
          if (responses[i].headers["content-disposition"]) {
            const regexp = /filename=(.*)/;
            zip.file(
              regexp.exec(responses[i].headers["content-disposition"])[1],
              Buffer.from(responses[i].data),
              { base64: false }
            );
          } else {
            zip.file(names[i], Buffer.from(responses[i].data), {
              base64: false,
            });
          }
        }

        const zipName = "gfbio_basket" + ".zip";

        zip
          .generateNodeStream({ type: "nodebuffer", streamFiles: true })
          .pipe(fs.createWriteStream(zipName))
          .on("finish", function () {
            console.log(zipName);
            res.status(200).download("./" + zipName, zipName);
          });
      })
    )
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: "Error",
        err,
      });
    });
});
/**
 * POST /addToBasket
 * download the basket
 */
/**
 * @swagger
 * /gfbio/addToBasket:
 *   post:
 *     description: adds dataset to the basket
 *     tags: [Search GFBio - Elastic index]
 *     summary: adds dataset to the basket
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: add to basket
 *         description: adds dataset to the basket
 *         schema:
 *            type: object
 *            required:
 *              - userId
 *              - basketContent
 *            properties:
 *              userId:
 *                type: integer
 *              basketContent:
 *                type: object
 *     responses:
 *       201:
 *         description: the item will be added to the database
 */

router.post("/addToBasket", (req, res) => {
  basket.create(req, res);

  // var sql = "INSERT INTO gfbio_basket (userid,basketcontent) VALUES(?,?)";
  // pool.query(sql,[req.body.userId,req.body.basketContent], function (err, result, fields) {
  //     if (err) throw new Error(err)
  // })
  res.status(200);
});
// router.post('/addToBasket', (req, res) => {
//     var sql = "INSERT INTO basket (user_id,data_id,data) VALUES(?,?,?)";
//     pool.query(sql, [req.body.userId, req.body.dataId, req.body.data], function (err, result, fields) {
//         if (err) throw new Error(err)
//     })
//     res.status(200).send(req.body);
// })
// router.post('/deleteFromBasket', (req, res) => {
//     var sql = "DELETE FROM basket WHERE data_id = (?) AND user_id = (?) LIMIT 1";
//     pool.query(sql,[req.body.dataId, req.body.userId], function (err, result, fields) {
//         if (err) throw new Error(err)
//     })
//     res.status(200).send(req.body);
// })
// router.post('/deleteAllBasket', (req, res) => {
//     var sql = "DELETE FROM basket WHERE user_id = (?)";
//     pool.query(sql,[req.body.userId], function (err, result, fields) {
//         if (err) throw new Error(err)
//     })
//     res.status(200).send(req.body);
// })
// router.post('/readFromBasket', (req, res) => {
//     var sql = "SELECT * FROM basket WHERE user_id = (?)";
//     pool.query(sql,[req.body.userId], function (err, result, fields) {
//         if (err) throw new Error(err)
//         res.status(200).send(result);
//     })
// })

/**
 * POST /readFromBasket
 * download the basket
 */
/**
 * @swagger
 * /gfbio/readFromBasket:
 *   post:
 *     description: returns the saved basket of the user
 *     tags: [Search GFBio - Elastic index]
 *     summary: returns the saved basket of the user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: reads the basket
 *         description: returns the saved basket of the user
 *         schema:
 *            type: object
 *            required:
 *              - userId
 *            properties:
 *              userId:
 *                type: integer
 *     responses:
 *       201:
 *         description: returns the saved basket of the user
 */
router.get("/readFromBasket", (req, res) => {
  basket.findByUserId(req, res);
  res.status(200).send(res);

  // var sql = "SELECT * FROM gfbio_basket WHERE userid = (?) ORDER BY basketid DESC LIMIT 1";
  // pool.query(sql,[req.body.userId], function (err, result, fields) {
  //     if (err) throw new Error(err)
  //     res.status(200).send(result);
  // })
});

/**
 * POST /semantic-search
 * semantic search service (based on query expansion)
 * search query is sent to GFBio TS first, only expanded result is forwarded to elasticsearch
 */
/**
 * @swagger
 * /gfbio/semantic-search:
 *   post:
 *     description: search query is sent to GFBio TS first, only expanded result is forwarded to elasticsearch
 *     tags: [Search GFBio - Elastic index]
 *     summary: returns search results including semantic related results
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: queryterm
 *         description: the query as string array
 *         schema:
 *            type: object
 *            required:
 *              - queryterm
 *            properties:
 *              queryterm:
 *                type: array
 *                items:
 *                   type: string
 *                example: [honeybee,grassland]
 *              from:
 *                type: integer
 *                description: from which page to start?
 *                example: 0
 *              size:
 *                type: integer
 *                description: how many datasets to return per page?
 *                example: 10
 *     responses:
 *       201:
 *         description: hits.hits contains an array with dataset objects matching the query.
 */
router.post("/semantic-search", (req, res) => {
  /*e.g.,
   * {
   *	"queryterm":["grassland","honeybee"],
   * 	"from":0,
   * 	"size":10
   * }
   */
  //expects keyword as string array
  const keywords = req.body.queryterm; //array with keywords
  const keywordsCombination = [];
  keywords.forEach(function (item) {
    const insideArr = item.split("+");
    keywordsCombination.push(insideArr);
  });
  const flatKeyWords = keywordsCombination.flat();
  const response = [];

  let axiosArray = [];

  let termData = [];

  //at first, send each keyword to GFBio TS
  for (let i = 0; i < flatKeyWords.length; i++) {
    //console.log("keyword: "+keywords[i]);
    axiosArray.push(
      axios.get(
        GFBioTS_URL + "search?query=" + flatKeyWords[i] + "&match_type=exact"
      )
    );
  }
  //collect all calls first and then send it in a bunch
  //axios will handle them in parallel and will only continue when all calls are back
  return axios
    .all(axiosArray)
    .then(
      axios.spread((...responses) => {
        for (let i = 0; i < axiosArray.length; i++) {
          let allKeyWords = [flatKeyWords[i]];
          const results = responses[i].data.results;
          results.forEach(function (item) {
            const log = "";
            //console.log(item);
            for (const [key, value] of Object.entries(item)) {
              if (
                item.sourceTerminology !== "GEONAMES" &&
                item.sourceTerminology !== "RIVERS_DE"
              ) {
                if (key === "commonNames") {
                  // var keyword = value.toString().replace(/,/g, "\"|\"");
                  // allKeyWords = allKeyWords.concat("\"" + keyword + "\"")
                  // log += "----- commonName : " + value + "\n";
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
                if (key === "synonyms") {
                  // var keyword = value.toString().replace(/,/g, "\"|\"");
                  // allKeyWords = allKeyWords.concat("\"" + keyword + "\"")
                  // log += "----- synonym : " + value + "\n";

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
                // if (key === 'label') {
                //
                //     allKeyWords = allKeyWords.concat("\"" + value + "\"")
                //     log += "----- label : " + value + "\n";
                // }
              }
            }
            if (
              item.sourceTerminology !== "GEONAMES" &&
              item.sourceTerminology !== "RIVERS_DE"
            ) {
              termData.push(item);
            }

            if (log.length > 0) {
              // console.log("----- sourceTerminology : " + item.sourceTerminology);
              // console.log("----- uri : " + item.uri);
              console.log(log);
            }
          });
          response.push(allKeyWords);
        }
        // console.log(" ************************** ");
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
        console.log(lastArr);
        // allKeyWords = allKeyWords.filter((a, b) => allKeyWords.indexOf(a) === b)
        // // console.log('allKeyWords: '+ allKeyWords)
        // var semanticTerms = allKeyWords;
        // var semanticTerms = allKeyWords.join("|");
        //elastic call
        let filter = [];
        let from = 0;
        let size = 0;

        //check if from, size and filters are in the request
        if (req.body.from !== "undefined" && req.body.from >= 0) {
          from = req.body.from;
        }

        if (req.body.size !== "undefined" && req.body.size >= 0) {
          size = req.body.size;
        }

        if (req.body.filter !== "undefined") {
          filter = req.body.filter;
        }

        //get the filtered query
        const filteredQuery = getQuery(lastArr, filter);

        //apply the boost
        const boostedQuery = applyBoost(filteredQuery);

        //get the complete query
        const data = getCompleteQuery(boostedQuery, from, size);

        //set the header - only json data accepted
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        // console.log("data is: " + JSON.stringify(data));

        //post the expanded query to GFBio elastic index
        // console.log("data is: " + JSON.stringify(data));
        return axios.post(Pangaea_URL, data, config);
      })
    )
    .then((resp) => {
      //last item is necessary for highlighting the expanded terms
      resp.data.termData = termData;
      // console.log("termData is: " + JSON.stringify(termData));
      //resp.data.lastItem = allKeyWords;
      const extendedTerms = [];
      const result = resp.data.hits.hits;
      for (let i = 0, iLen = result.length; i < iLen; i++) {
        const highlight = result[i].highlight;
        // console.log(highlight)
        if (highlight != null) {
          const highlightArr = extractHighlightedSearch(highlight);
          // console.log(highlightArr);
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
            //if (!isAdded && highlightArr[iHighlight].length>highlightLength){
            if (!isAdded) {
              extendedTerms.push(highlightArr[iHighlight]);
            }
          }
        }
      }
      // console.log(" ************************** ");
      // console.log("----- search terms found in datasets: " + extendedTerms.join(", "));
      resp.data.lastItem = extendedTerms;

      res.set("Content-Type", "application/json");
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: "Error",
        err,
      });
    });
});

router.post("/narrow", (req, res) => {
  // console.log('narrow:' + req.body);
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
});

router.post("/broad", (req, res) => {
  // console.log('broad:' + req.body);
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
});

router.post("/collection", (req, res) => {
  // console.log('POST COLLECTION ------------');
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Token ${COLLECTIONS_API_TOKEN}`,
  };
  return axios
    .post(COLLECTIONS_API_URL, req.body, { headers: headers })
    .then((resp) => {
      res.status(200).send(resp.data);
      // console.log('collection post response ');
      // console.log(resp.data);
    })
    .catch((err) => {
      return res.status(500).json({
        msg: "Error while posting to /collection",
      });
    });
});

router.post("/collection-update", (req, res) => {
  // console.log('UPDATE COLLECTION ------------');
  // console.log('request body');
  console.log(req.body.collection_id);
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Token ${COLLECTIONS_API_TOKEN}`,
  };
  const updateUrl = `${COLLECTIONS_API_URL}${req.body.collection_id}`;
  // console.log('updateURL: ', updateUrl);
  return axios
    .put(updateUrl, req.body, { headers: headers })
    .then((resp) => {
      // console.log('collection put response ');
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      // console.log('Error catch of PUT ');
      console.log(err);
      return res.status(500).json({
        msg: "Error while posting to /collection-update",
      });
    });
});

/****************** Helper function ******************************/

/*
 * Description: Add filter to a JSON query message
 * Input: String keyword : search keyword
 *        JSONArray filter : filter option (Authors, Region, Data Center)
 * Output: JSONObject : filtered query
 */
function getFilteredQuery(keyword, filterArray) {
  let queryObj;
  // console.log(':: filterArray ' + JSON.stringify(filterArray));
  if (keyword !== "") {
    queryObj = {
      simple_query_string: {
        query: keyword,
        fields: [
          "fulltext",
          "fulltext.folded^.7",
          "citation^3",
          "citation.folded^2.1",
        ],
        default_operator: "or",
      },
    };
  } else {
    queryObj = {
      match_all: {},
    };
  }

  return {
    bool: {
      must: queryObj,
      filter: filterArray,
    },
  };
}

// FIXME: this is not used. Can this be deleted then ?
// function getBooleanQuery(keyword, filterArray) {
//     // console.log(keyword)
//     let queryObj = {};
//     let boostedKeywords = [];
//
//     //keyword array with original term [0] and expanded terms [1] - [X]
//     if (keyword.length > 0) {
//         for (let i = 0; i < keyword.length; i++) {
//             let booster = 1; //less priority to expanded terms
//             let fields = [];
//             if (i == 0) { // higher priority to original keyword
//                 booster = 2.2;
//                 fields = ["citation_title^3", "citation_title.folded^2.1",
//                     "description^2.1", "description.folded",
//                     "type.folded", "parameter.folded", "region.folded", "dataCenter.folded"];
//                 //["fulltext", "fulltext.folded^.7", "citation^3", "citation.folded^2.1"];
//             } else { // extended keywords
//                 fields = ["citation_title^3", "citation_title.folded^2.1",
//                     "description^2.1", "description.folded",
//                     "parameter.folded", "region.folded", "dataCenter.folded"];
//             }
//             let keywordWithQuotes = keyword[i];
//             boostedKeywords.push({
//                 "simple_query_string": {
//                     "query": keywordWithQuotes,
//                     "fields": fields,
//                     "default_operator": "or",
//                     "boost": booster
//                 }
//             });
//         }
//
//         queryObj = {
//             "bool": {
//                 "should": boostedKeywords
//             }
//         };
//     } else {
//         return {"match_all": {}};
//     }
//
//
//     queryObj = {
//         "bool": {
//             "must": [{
//                 "bool": {
//                     "should": boostedKeywords
//                 }
//             }],
//             "filter": filterArray
//         }
//     }
//
//
//     return queryObj;
// }

function getQuery(keyword, filterArray) {
  //console.log(keyword)
  let queryObj = {};
  let boostedKeywords = [];
  console.log(keyword);

  //keyword array with original term [0] and expanded terms [1] - [X]
  if (keyword.length > 0) {
    let firstKeyWord = keyword[0];
    keyword.shift();
    let keysWithParanthesis = [];
    for (let i = 0; i < keyword.length; i++) {
      keysWithParanthesis.push("(" + keyword[i] + ")");
    }
    let secondKeyWord = keysWithParanthesis.join(" ");
    let firstBooster = getBooster(1, firstKeyWord);
    let secondBooster = getBooster(2, secondKeyWord);
    boostedKeywords.push(firstBooster);
    boostedKeywords.push(secondBooster);

    queryObj = {
      bool: {
        should: boostedKeywords,
      },
    };
  } else {
    return { match_all: {} };
  }

  queryObj = {
    bool: {
      must: [
        {
          bool: {
            should: boostedKeywords,
          },
        },
      ],
      filter: filterArray,
    },
  };

  return queryObj;
}

function getBooster(level, keys) {
  let booster; //less priority to expanded terms
  let fields;
  if (level === 1) {
    // higher priority to original keyword
    booster = 2.2;
    fields = [
      "citation_title^3",
      "citation_title.folded^2.1",
      "description^2.1",
      "description.folded",
      "type.folded",
      "parameter.folded",
      "region.folded",
      "dataCenter.folded",
    ];
    //["fulltext", "fulltext.folded^.7", "citation^3", "citation.folded^2.1"];
  } else {
    // extended keywords
    booster = 1;
    fields = [
      "citation_title^3",
      "citation_title.folded^2.1",
      "description^2.1",
      "description.folded",
      "parameter.folded",
      "region.folded",
      "dataCenter.folded",
    ];
  }
  return {
    simple_query_string: {
      query: keys,
      fields: fields,
      default_operator: "or",
      boost: booster,
    },
  };
}

/*
 * Description: Apply boosting option to a JSON query message
 * Input: JSONObject query : JSON query message with filter option
 * Output: JSONObject : boosted query
 */
function applyBoost(query) {
  return {
    function_score: {
      query: query,
      functions: [
        {
          field_value_factor: {
            field: "boost",
          },
        },
      ],
      score_mode: "multiply",
    },
  };
}

/*
 * Description: Complete a JSON query message with query size, query field, and facets options
 * Input: JSONObject boostedQuery : a JSON query mesage with filter and boost parameters
 *        int iDisplayStart : starting index of dataset (read from pagination option)
 *        int iDisplayLength : size of dataset (read from pagination option)
 *        JSONArray queryfield : array of query fields
 * Output: JSONObject : a complete JSON request message
 */
function getCompleteQuery(boostedQuery, iDisplayStart, iDisplayLength) {
  return {
    query: boostedQuery,
    highlight: {
      fields: { "*": {} },
    },
    from: iDisplayStart,
    size: iDisplayLength,
    aggs: {
      taxonomy: {
        terms: {
          field: "taxonomyFacet",
          size: 50,
        },
      },
      region: {
        terms: {
          field: "regionFacet",
          size: 50,
        },
      },
      parameter: {
        terms: {
          field: "parameterFacet",
          size: 50,
        },
      },
      gfbioDataKind: {
        terms: {
          field: "gfbioDataKindFacet",
          size: 50,
        },
      },
      dataCenter: {
        terms: {
          field: "dataCenterFacet",
          size: 50,
        },
      },
      type: {
        terms: {
          field: "typeFacet",
          size: 50,
        },
      },
    },
  };
}

/**
 ** Description: collect all expanded terms found in the datasets (needs to be highlighted in text and listed as "expanded terms"),
 ** Input: array with fields containg html including <em>keyword</em>
 ** Output: array with keywords
 **/
function extractHighlightedSearch(highlightArray) {
  let jArr = [];
  for (let fieldsKey in highlightArray) {
    //console.log("key:"+fieldsKey+", value:"+highlightArray[fieldsKey]);
    let fieldsArray = highlightArray[fieldsKey];
    for (let j = 0; j < fieldsArray.length; j++) {
      let highlightedText = fieldsArray[j];
      //console.log(highlightedText);
      let startTag = highlightedText.indexOf("<em>");
      let endTag = 0;
      let taggedText = "";
      while (startTag >= 0) {
        endTag = highlightedText.indexOf("</em>", startTag);
        taggedText = highlightedText.substring(startTag + 4, endTag);
        if (jArr.indexOf(taggedText) < 0) {
          jArr.push(taggedText);
        }
        startTag = highlightedText.indexOf("<em>", endTag + 5);
      }
    }
  }

  return jArr;
}

module.exports = router;
