const glob = require('glob');
const { join } = require('path');

module.exports = app => {
  glob('src/routes/**/*.js', (err, matches) => {
    matches.forEach(match => {
      const routeConfig = require(join(__dirname, '..', match.replace('src/', '')));

      const keys = Object.keys(routeConfig);
      const keyParser = key => key.replace(/\s+/, ' ').split(/ /);
      const controllerParser = c => c.replace(/\.+/, '.').split('.')

      const verbs = ['get', 'post', 'put', 'head', 'delete', 'options'];
      keys.forEach(key => {

        if (key !== 'prefix') {
          const [controllerName, method = 'index'] = controllerParser(routeConfig[key]);

          const [verb = 'GET', path] = keyParser(key);

          const controller =
            require(`../controllers/${controllerName.toLowerCase()}.controller.js`);


          if (!controller[method]) {
            throw new Error(`Method: ${method} not found in ${controllerName}.controller.js.`);
          }


          const prefixedRoute = routeConfig.prefix ? `${routeConfig.prefix}${path}` : path;

          app[verbs.find(v => verb.toLowerCase() === v)](prefixedRoute, controller[method]);
        }
      });

    })
  });
};
