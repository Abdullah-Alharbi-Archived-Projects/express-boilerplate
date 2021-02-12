const { loadConfig } = require("../helpers/env");
const session = require("express-session");

/**
 * @param {Express.Application} app 
 */
module.exports = app => {
  app.use(session(loadConfig({ configName: 'session' })));
};
