const { getCurrentEnv } = require('../helpers/env');
const dbDebugger = require('debug')('app:db');
const Knex = require('knex');

try {
	dbDebugger("Connecting to database...");

	// Initialize knex.
	const knex = Knex(require('../config/database')[getCurrentEnv()]);

	knex.on("connection-error", O_O => {
		dbDebugger(`Something went wrong while trying to connect to ${knex.client}.`);
		throw new Error(O_O);
	});

	module.exports = knex;
} catch (O_O) {
	dbDebugger(`Got error while trying to connect.`);
	throw new Error(O_O);
}


