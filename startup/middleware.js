const config = require("config");
const { json } = require("express");
const helmet = require("helmet");

// custom middleware
const i18n = require("./middleware/i18n");

module.exports = function(app) {
  app.use(json());
  app.use(helmet());

  if (config.get("localization.activate")) {
    app.use(i18n);
  }
};
