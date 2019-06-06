const config = require('config');

const port = process.env.PORT || process.argv[2] || config.get('port') || 8000;

const app = require('./startup/server');

require('./startup/logger')(app);
require('./startup/database')();
require('./startup/config')(app);
require('./startup/middleware')(app);
require('./startup/routes')(app);

app.listen(port, () => serverDebugger(`Listening on http://localhost:${port}/ ...`));