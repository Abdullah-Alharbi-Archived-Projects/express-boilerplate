const handlebars = require("express-handlebars");
const { join } = require("path");
const { loadConfig } = require("../helpers/env");

/**
 * @param {Express.Application} app 
 */
module.exports = app => {
  const config = loadConfig('views');
  
  app.set("view engine", config.viewEngine);

  app.set("views", join(__dirname, "../", `${config.viewsFolder}/${config.pagesFolder}`));

  const layoutsDir = join(__dirname, "../", config.layoutsDir);
  const partialsDir = join(__dirname, "../", config.partialsDir);

  app.engine(
    config.engine,
    handlebars({
      ...config.handlebars,
      layoutsDir,
      partialsDir
    })
  );
};
