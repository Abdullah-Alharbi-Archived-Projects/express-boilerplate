const serverDebugger = require('debug')('app:server');
const morgan = require('morgan');
const { loadConfig } = require('../helpers/env');

/**
 * @param {Express.Application} app 
 */
module.exports = app => {
  const config = loadConfig({ configName: 'logger' });

  if (config.morgan.enabled) {
    app.use(
      morgan(config.morgan.level, config.morgan.options)
    );
    serverDebugger(`Logger is active on level: ${config.morgan.level}.`);
  }
};
