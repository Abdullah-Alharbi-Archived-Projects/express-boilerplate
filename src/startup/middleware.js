const { json, urlencoded } = require("express");
const helmet = require("helmet");
const compression = require("compression");
const methodOverride = require("method-override");

/**
 * @param {Express.Application} app 
 */
module.exports = app => {
  const config = require('../config/middleware');

  app.use(
    json(config.json),

    urlencoded(config.urlencoded),

    helmet(config.helmet),

    compression(config.compression),

    // to use this middleware send a POST request with eaither _method=<HTTP_VERB> query string
    // or send a POST request with this header X-HTTP-Method: <HTTP_VERB> 
    methodOverride(config.methodOverride.header),
    methodOverride(config.methodOverride.query)
  );
};
