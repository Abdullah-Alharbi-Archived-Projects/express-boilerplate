const { json } = require("express");
const helmet = require("helmet");
const compression = require("compression");

module.exports = function(app) {
  app.use(json());
  app.use(helmet());
  app.use(compression()); // compress all responses
};
