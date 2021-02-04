describe("Database Tests Suits", () => {
    it("should connect", () => {
        const knex = require('../../database');

        expect(knex.pool).not.toBeNull();
    });
});
