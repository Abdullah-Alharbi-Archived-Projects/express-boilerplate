const helpers = {
    getCurrentEnv() {
        return process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
    },

    env(variableName = '', defaultValue = null) {
        return process.env[variableName.toUpperCase()] ? process.env[variableName.toUpperCase()] : defaultValue;
    },


    loadConfig({configName = '', property = null, env = false}) {
        const config = require(`../config/${configName}.js`);
        const prop = property ? config[property] : config;

        if (!env) return prop;

        return env == 'current' ? prop[helpers.getCurrentEnv()] : prop[env];
    },

    boolOnEnv(env = 'development') {
        return helpers.getCurrentEnv() === env;
    },

};


module.exports = helpers;