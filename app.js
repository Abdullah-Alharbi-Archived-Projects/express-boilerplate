const { loadConfig } = require("./src/helpers/env");
const serverDebugger = require("debug")("app:server");
const express = require("express");

const app = express();
const { port, hostname } = loadConfig('server', 'server');

require("./src/startup/logger")(app);
require("./src/startup/database");
require("./src/startup/handlebars")(app);
require("./src/startup/session")(app);
require("./src/startup/middleware")(app);
require("./src/startup/routes")(app);
require("./src/startup/server")(app);

app.listen(port, hostname, () =>
  serverDebugger(`Listening on http://${hostname}:${port}/ ...`)
);
