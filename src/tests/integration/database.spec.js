describe("Database Tests Suite", () => {
    it("should connect", () => {
        const knex = require('../../database');

        expect(knex.pool).not.toBeNull();
    });
});
