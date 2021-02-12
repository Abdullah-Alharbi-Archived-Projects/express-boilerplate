const { env, boolOnEnv } = require('../helpers/env');

module.exports = {

    secret: env('APP_SESSION_SECRET', 'superSecretCat'),

    resave: env('APP_SESSION_RESAVE', false),

    saveUninitialized: env('APP_SESSION_SAVE_UNINITIALIZED', true),

    cookie: {
        secure: env('APP_SESSION_COOKIE_SECURE', false), // if you are using ssl/tcl set this to true
        sameSite: env('APP_SESSION_COOKIE_SAME_SITE', true),
    },
};
