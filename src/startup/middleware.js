const { json } = require("express");
const helmet = require("helmet");
const compression = require("compression");
const methodOverride = require("method-override");

module.exports = function(app) {
  app.use(json());
  app.use(helmet());
  app.use(compression()); // compress all responses

  // methodOverride by header
  app.use(methodOverride("X-HTTP-Method"));
  // and by attach ?_method=POST etc... to override the request
  app.use(methodOverride("_method"));
};
