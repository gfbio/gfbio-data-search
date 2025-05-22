exports.getFilteredQuery = (keyword, filterArray) => {
  let queryObj;
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
    queryObj = { match_all: {} };
  }

  return {
    bool: {
      must: queryObj,
      filter: filterArray,
    },
  };
};

/*
 * Description: Apply boosting option to a JSON query message
 * Input: JSONObject query : JSON query message with filter option
 * Output: JSONObject : boosted query
 */

exports.applyBoost = (query) => {
  return {
    function_score: {
      query: query,
      functions: [
        {
          field_value_factor: {
            field: "boost",
            missing: 1,  // Use 1 as default value if boost field is missing
            modifier: "log1p"  // Apply log1p to reduce the impact of large differences
          },
        },
      ],
      score_mode: "multiply",
    },
  };
};

/*
 * Description: Complete a JSON query message with query size, query field, and facets options
 * Input: JSONObject boostedQuery : a JSON query mesage with filter and boost parameters
 *        int iDisplayStart : starting index of dataset (read from pagination option)
 *        int iDisplayLength : size of dataset (read from pagination option)
 *        JSONArray queryfield : array of query fields
 * Output: JSONObject : a complete JSON request message
 */
exports.getCompleteQuery = (boostedQuery, iDisplayStart, iDisplayLength) => {
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
      // dataCenter facet removed as part of provider unification
      dataProvider: {
        terms: {
          field: "dataProviderFacet",
          size: 50,
        },
        aggs: {
          isDataCenter: {
            terms: {
              field: "isDataCenter"
            }
          }
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
};

/**
 ** Description: collect all expanded terms found in the datasets (needs to be highlighted in text and listed as "expanded terms"),
 ** Input: array with fields containg html including <em>keyword</em>
 ** Output: array with keywords
 **/

exports.extractHighlightedSearch = (highlightArray) => {
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
};

exports.getBooster = (level, keys) => {
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
};

exports.getQuery = (keyword, filterArray) => {
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
    let firstBooster = this.getBooster(1, firstKeyWord);
    let secondBooster = this.getBooster(2, secondKeyWord);
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
};
