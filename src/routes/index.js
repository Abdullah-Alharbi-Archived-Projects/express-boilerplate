const { Router } = require("express");
const apiVersoins = require("./api");
const ssrVersions = require("./ssr/v1");

const api = Router();
const ssr = Router();

// versions goes here
api.use(apiVersoins);

ssr.use("/", ssrVersions);

module.exports = {
  api,
  ssr
};
