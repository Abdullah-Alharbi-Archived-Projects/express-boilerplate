const { getCurrentEnv, loadConfig } = require('../helpers/env');
const dbDebugger = require('debug')('app:db');
const Knex = require('knex');

try {
	dbDebugger("Connecting to database...");

	const config = loadConfig({ configName: 'database', env: 'current' });

	// Initialize knex.
	const knex = Knex(config);

	knex.on("connection-error", O_O => {
		dbDebugger(`Something went wrong while trying to connect to ${knex.client}.`);
		throw new Error(O_O);
	});

	module.exports = knex;
} catch (O_O) {
	dbDebugger(`Got error while trying to connect.`);
	throw new Error(O_O);
}


