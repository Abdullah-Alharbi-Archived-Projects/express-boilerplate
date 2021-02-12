const { intersect } = require("../../database");

describe("Environment unit tests suite 2", () => {
    it("should return 'false' if current environment is not production", () => {
        const { boolOnEnv } = require('../../helpers/env');
        process.env.NODE_ENV = "development";
        expect(boolOnEnv("production")).toBe(false);
    });

    it("should return 'true' if current environment is production", () => {
        const { boolOnEnv } = require('../../helpers/env');
        process.env.NODE_ENV = "production";
        expect(boolOnEnv("production")).toBe(true);
    });
});
