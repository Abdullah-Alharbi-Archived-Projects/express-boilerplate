describe("Environment unit tests suite", () => {
    it("should read a property from .env file", () => {
        require('dotenv').config();

        const {env} = require('../../../helpers/env');

        expect(env('APP_DATABASE_NAME')).toBe('playground');
    });

    it("should return a default configurations if no environment variable.", () => {
        const {env} = require('../../../helpers/env');

        expect(env('APP_TEST_NAME', 'jest test')).toBe('jest test');
    });

    it("should return null if no default value was specified.", () => {
        const {env} = require('../../../helpers/env');

        expect(env('APP_TEST_NAME')).toBeNull();
    });
});
