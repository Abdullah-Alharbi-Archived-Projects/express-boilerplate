module.exports = {
    getCurrentEnv() {
        return process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
    },

    env(variableName = '', defaultValue = null) {
        return process.env[variableName.toUpperCase()] ? process.env[variableName.toUpperCase()] : defaultValue;
    },

};
