module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["prettier", "@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    globals: {
        module: "readonly",
        Promise: "readonly",
        fetch: "readonly",
        cy: "readonly",
        Cypress: "readonly",
        after: "readonly",
        before: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        spyOn: "readonly",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",
    },
    env: {
        browser: true,
    },
    rules: {
        "prettier/prettier": ["warn"],
        "@typescript-eslint/no-var-requires": ["off"],
        "@typescript-eslint/no-empty-interface": ["off"],
    },
};
