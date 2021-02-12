const { loadConfig } = require('../helpers/env');
const { static } = require("express");
const { join } = require("path");
const serverDebugger = require("debug")("app:server");

/**
 * @param {Express.Application} app 
 */
module.exports = app => {
  const { static: staticConfig, global } = loadConfig({configName: 'server'});

  if (global.trustProxy) {
    app.set("trust proxy", 1);
    serverDebugger("Trust proxy is enabled.");
  }

  if (staticConfig.enabled) {
    const staticPath = join(__dirname, `../${staticConfig.folder}`);
    app.use(staticConfig.route, static(staticPath, staticConfig.middleware));
    serverDebugger(`Serve static files is active at "${staticPath}".`);
  }

  // note: in development mode i highly recommend disabling Etag
  if (!global.etag) app.disable("etag");

  if (typeof global.poweredBy !== 'boolean') {
    app.set("x-powered-by", global.poweredBy);
    serverDebugger(`Powered By: "${global.poweredBy}".`);
  }

  if (typeof global.poweredBy === 'boolean' && !global.poweredBy) app.disable("x-powered-by");
};
