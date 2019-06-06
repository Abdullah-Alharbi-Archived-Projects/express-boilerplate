const { static } = require('express');
const config = require('config');
const serverDebugger = require('debug')('app:server');

module.exports = function(app) {
  if (config.has('static') && config.get('static')) {
    app.use(static(config.get('static')));
    serverDebugger(`Serve static files is active "${config.get('static')}".`);
  }
};
