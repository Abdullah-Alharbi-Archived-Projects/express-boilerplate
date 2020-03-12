const routes = require("../routes/");

module.exports = function(app) {
  app.use("/api/", routes.api);

  app.use("/", routes.ssr);
};
