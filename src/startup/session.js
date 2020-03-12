const config = require("config");
const session = require("express-session");
const env = process.env.NODE_ENV || "development";

module.exports = app => {
  // trust first proxy if you in production stage
  if (env.toLowerCase === "production") app.set("trust proxy", 1);

  app.use(
    session({
      secret: config.get("session.secret"),
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false, // if you are using ssl/tcl set this to true
        sameSite: true
      }
    })
  );
};
