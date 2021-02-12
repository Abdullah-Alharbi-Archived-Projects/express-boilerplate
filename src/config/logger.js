const { env } = require('../helpers/env');
const morganDebugger = require('debug')('app:morgan');

module.exports = {
    morgan: {
        enabled: env('APP_LOGGER_MORGAN_ENABLED', true),

        level: env('APP_LOGGER_MORGAN_LEVEL', 'dev'),

        options: {
            // immediate: env('APP_LOGGER_MORGAN_OPTIONS_IMMEDIATE', false),

            // Function to determine if logging is skipped,
            // defaults to false.
            // This function will be called as skip(req, res).
            // skip: false,

            stream: {
                write(str) {
                    morganDebugger(str.replace(/-/gi, '').replace(/\s+/gi, ' '));
                },
            },
        },
    },

};
