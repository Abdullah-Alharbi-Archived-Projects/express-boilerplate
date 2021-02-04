const knex = require('../index');
const { Model } = require('objection');
const dbDebugger = require('debug')('app:db');

/**
 * this is a pre-model just to make sure that everything is working as expected.
 */

Model.knex(knex);

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'id';
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['firstName', 'lastName'],

            properties: {
                id: { type: 'integer' },
                firstName: { type: 'string', minLength: 1, maxLength: 255 },
                lastName: { type: 'string', minLength: 1, maxLength: 255 },
                age: { type: 'number' },
            }
        };
    }

}


// from here is the migration part, i will move it to src/database/migration,
// after integrating knex properly.
async function createSchema() {
    if (await knex.schema.hasTable('users')) {
      return false;
    }
  
    await knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.integer('age');
    });

    return true;
}

createSchema()
    .then(bool => bool ? dbDebugger("Created Users Table.") : dbDebugger("User table is already created."))
    .catch(err => {
        dbDebugger("Something went wrong while trying creating users table.");
        throw new Error(err);
    })
;

module.exports = User;
