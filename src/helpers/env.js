const {join} = require('path');

const helpers = {
    getCurrentEnv() {
        return process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
    },

    env(variableName = '', defaultValue = null) {
        return process.env[variableName.toUpperCase()] ? process.env[variableName.toUpperCase()] : defaultValue;
    },


    loadConfig(configName = '', property = null) {
        const config = require(`../config/${configName}.js`);

        return property ? config[property] : config;
    },

    boolOnEnv(env = 'development') {
        return helpers.getCurrentEnv() === env;
    }

};


module.exports = helpers;