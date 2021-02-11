const {env} = require('../helpers/env');

module.exports = {
    
    viewEngine: env('APP_VIEWS_ENGINE', 'hbs'),

    viewsFolder: env('APP_VIEWS_FOLDER', 'views'),

    pagesFolder: env('APP_VIEWS_PAGES_FOLDER', 'pages'),

    layoutsDir: env('APP_VIEWS_LAYOUTS_DIRECTOR', 'views/layouts'),

    partialsDir: env('APP_VIEWS_PARTIALS_DIRECTOR', 'views/partials'),

    engine: env('APP_VIEWS_ENGINE', 'hbs'),

    handlebars: {

        extname: env('APP_VIEWS_HANDLEBARS_EXTNAME', 'hbs'),

        defaultLayout: env('APP_VIEWS_HANDLEBARS_DEFAULT_LAYOUT', 'default'),

        defaultLayout: env('APP_VIEWS_HANDLEBARS_DEFAULT_LAYOUT', 'default'),
    },
};

