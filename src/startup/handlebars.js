const handlebars = require("express-handlebars");
const { join } = require("path");

module.exports = app => {
  app.set("view engine", "hbs");
  app.set("views", join(__dirname, "../", "views/pages"));

  const layoutsDir = join(__dirname, "../", "views/layouts/");
  const partialsDir = join(__dirname, "../", "views/partials/");

  app.engine(
    "hbs",
    handlebars({
      extname: "hbs",
      defaultLayout: "default",
      layoutsDir,
      partialsDir
    })
  );
};
