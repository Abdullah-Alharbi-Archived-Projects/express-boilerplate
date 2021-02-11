const { env } = require('../helpers/env');

// all database configurations are here
// even knex configurations 
// each environment have it's own configurations

// you can also create a shared object like so [check line 16]
const shared = {
    client: env('APP_DATABASE_CLIENT', 'mysql'),
    migrations: {
        database: env('APP_DATABASE_MIGRATIONS_TABLE', 'migrations'), // this is the migration table name
        directory: env('APP_DATABASE_MIGRATIONS_FOLDER_PATH', 'src/database/migrations'),
    },
};

module.exports = {
    
    development: {
        // then use spread operator to add all shared configurations across all environments
        ...shared,

        debug: env('APP_DATABASE_DEBUG', true), // this should only be enabled in development

        connection: {
            host: env('APP_DATABASE_HOST', 'localhost'),
            user: env('APP_DATABASE_USER', 'root'),
            password: env('APP_DATABASE_PASSWORD', ''),
            database: env('APP_DATABASE_NAME', ''),
        },

        // you can override shared object
        // for example change database to postgreSQL
        // client: 'pg',

    },


    production: {
        ...shared,

        connection: {
            host: env('APP_DATABASE_HOST', 'localhost'),
            user: env('APP_DATABASE_USER', 'root'),
            password: env('APP_DATABASE_PASSWORD', ''),
            database: env('APP_DATABASE_NAME', ''),
        },
        
    },


    test: {
        ...shared,

        connection: {
            host: env('APP_DATABASE_HOST', 'localhost'),
            user: env('APP_DATABASE_USER', 'root'),
            password: env('APP_DATABASE_PASSWORD', ''),
            database: env('APP_DATABASE_NAME', ''),
        },

    },
};
