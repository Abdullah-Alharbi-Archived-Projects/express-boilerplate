const serverDebugger = require("debug")("app:server");
const config = require("config");
const express = require("express");

const port = process.env.PORT || process.argv[2] || config.get("port") || 8000;

const app = express();

require("./src/startup/logger")(app);
require("./src/startup/database")();
require("./src/startup/config")(app);
require("./src/startup/middleware")(app);
require("./src/startup/routes")(app);

app.listen(port, () =>
  serverDebugger(`Listening on http://localhost:${port}/ ...`)
);
