const express = require("express");

module.exports = {
  jsonParser: express.json(),
  urlencodedParser: express.urlencoded({ extended: false }),
};
