const { loadConfig } = require('../helpers/env');
const { static } = require("express");
const { join } = require("path");
const serverDebugger = require("debug")("app:server");

/**
 * @param {Express.Application} app 
 */
module.exports = app => {
  const { static: staticConfig, global } = loadConfig('server');


  if (staticConfig.enabled) {
    const staticPath = join(__dirname, `../${staticConfig.folder}`);
    app.use(staticConfig.route, static(staticPath, staticConfig.middleware));
    serverDebugger(`Serve static files is active at "${staticPath}".`);
  }

  // note: in development mode i highly recommend disabling Etag
  if (!global.etag) app.disable("etag");

  if (typeof global.poweredBy !== 'boolean') {
    serverDebugger(`Powered By: "${global.poweredBy}".`);
    app.set("x-powered-by", global.poweredBy);
  }

  if (typeof global.poweredBy === 'boolean' && !global.poweredBy) app.disable("x-powered-by");
};
