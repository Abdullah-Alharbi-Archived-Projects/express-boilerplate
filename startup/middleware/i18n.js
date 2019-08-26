const config = require("config");
const i18n = require("i18n");
const i18nDebugger = require("debug")("app:i18n");
const { join } = require("path");

const localizationFolder = join(
  __dirname,
  "../..",
  `/${config.get("localization.folderName")}`
);

i18n.configure({
  // setup some locales - other locales default to en silently
  locales: config.get("localization.locales"),

  // where to store json files - defaults to './locales' relative to modules directory
  directory: localizationFolder,

  defaultLocale: config.get("localization.default"),

  // sets a custom cookie name to parse locale settings from  - defaults to NULL
  cookie: config.get("localization.cookieName"),

  // queryString
  queryParameter: config.get("localization.query"),
  autoReload: true,
  objectNotation: true,

  logDebugFn: msg => i18nDebugger(msg),
  logWarnFn: msg => i18nDebugger("Warning ", msg),
  logErrorFn: msg => i18nDebugger("Error ", msg)
});

module.exports = (req, res, next) => {
  i18n.init(req, res);
  i18n.getLocale();

  return next();
};
