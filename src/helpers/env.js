module.exports = {
    getCurrentEnv() {
        return process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
    },

    env(variableName, defaultValue = null) {
        return process.env[variableName] ? process.env[variableName] : defaultValue;
    },

};
