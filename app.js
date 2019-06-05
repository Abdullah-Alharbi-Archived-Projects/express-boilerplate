const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const serverDebugger = require('debug')('app:server');
const dbDebugger = require('debug')('app:db');

// import global middlewares here
const morgan = require('morgan');
const helmet = require('helmet');

const api = require('./routes/index');


const app = express();
const port = process.env.PORT || process.argv[2] || config.get('port') || 8000;

// connect to mongodb
mongoose
  .connect(config.get('db.url'), { useNewUrlParser: config.get('db.useNewUrlParser'), useFindAndModify: config.get('db.useFindAndModify') })
  .then(() => dbDebugger('Database connected successfully.'))
  .catch((O_O) => dbDebugger('Unable to connect to mongodb.', O_O));

// setup global middlewares
app.use(express.json());
app.use(helmet());

// serve static files
if (config.has('static') && config.get('static')) {
  app.use(express.static(config.get('static')));
  serverDebugger(`Serve static files is active "${config.get('static')}".`);
}

// logger
if (config.has('logger') && config.get('logger.active')) {
  app.use(morgan(config.get('logger.level')));
  serverDebugger(`Logger is active on level: ${config.get('logger.level')}.`);
}

app.use('/api/v', api);

app.listen(port, () => serverDebugger(`Listening on http://localhost:${port}/ ...`));
