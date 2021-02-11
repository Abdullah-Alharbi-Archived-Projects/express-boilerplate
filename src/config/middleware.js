const { env } = require('../helpers/env');

module.exports = {
    json: {

    },

    urlencoded: {
        extended: env("APP_MIDDLEWARE_URL_EXTENDED_ENCODED", false)
    },

    helmet: {

    },

    compression: {

    },

    methodOverride: {
        header: env("APP_MIDDLEWARE_METHOD_OVERRIDE", "X-HTTP-Method"),
        query: env("APP_MIDDLEWARE_METHOD_OVERRIDE_QUERY", "_method"),
    },
};
