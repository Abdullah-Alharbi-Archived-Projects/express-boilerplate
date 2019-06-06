const { json } = require('express');
const helmet = require('helmet');

module.exports = function (app) {
  app.use(json());
  app.use(helmet());
};
