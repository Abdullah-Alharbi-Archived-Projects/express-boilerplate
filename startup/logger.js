const config = require('config');
const serverDebugger = require('debug')('app:server');
const morgan = require('morgan');

module.exports = function(app) {
  if (config.has('logger') && config.get('logger.active')) {
    app.use(morgan(config.get('logger.level')));
    serverDebugger(`Logger is active on level: ${config.get('logger.level')}.`);
  }
};