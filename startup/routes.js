const api = require("../routes/index");

module.exports = function(app) {
  app.use("/api/", api);
};
