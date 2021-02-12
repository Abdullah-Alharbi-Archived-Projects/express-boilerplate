const { env, boolOnEnv } = require('../helpers/env');

module.exports = {

    // static middleware configurations
    static: {
        // enable or disable serving static
        enabled: env('APP_SERVER_STATIC_ENABLED', true),

        folder: env('APP_SERVER_STATIC_FOLDER', 'public'),

        // all static middleware configurations:
        // http://expressjs.com/en/resources/middleware/serve-static.html
        middleware: {

            cacheControl: env('APP_SERVER_STATIC_MIDDLEWARE_CACHE_CONTROL'),

            dotFiles: env('APP_SERVER_STATIC_MIDDLEWARE_DOT_FILES', false),

            // enable or disable etag for static assets such as images, css etc...
            etag: env('APP_SERVER_STATIC_MIDDLEWARE_ETAG', true),

            extensions: env('APP_SERVER_STATIC_MIDDLEWARE_EXTENSIONS'),

            // if there's index.html in any directory in "public" express will serve it
            // if you need this behaviour change this to "true"
            index: env('APP_SERVER_STATIC_MIDDLEWARE_INDEX', false),

            // Enable or disable Last-Modified header, defaults to true. Uses the file system's last modified value.
            lastModified: env('APP_SERVER_STATIC_MIDDLEWARE_LAST_MODIFIED', true),


            immutable: env('APP_SERVER_STATIC_MIDDLEWARE_IMMUTABLE', false),

            maxAge: env('APP_SERVER_STATIC_MIDDLEWARE_MAX_AGE', 0),


            redirect: env('APP_SERVER_STATIC_MIDDLEWARE_REDIRECT', true),

            // function to set custom headers for static files
            setHeaders() { },
        },

        // static route path /public/images/first.jpg
        route: env('APP_SERVER_STATIC_ROUTE', '/public'),
    },


    global: {
        etag: env('APP_SERVER_GLOBAL_ETAG', boolOnEnv()),

        poweredBy: env('APP_SERVER_GLOBAL_POWERED_BY', false),

        trustProxy: env('APP_SERVER_GLOBAL_TRUST_PROXY', boolOnEnv('production')),
    },


    server: {
        port: env('APP_SERVER_PORT', process.argv[2] || 8001),

        hostname: env('APP_SERVER_HOST_NAME', 'localhost'),
    },


};

console.log(module.exports.global);