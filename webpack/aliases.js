const path = require("path");
const PATHS = require("./paths");

/**
 * If you add new aliases here, please also add to:
 * package.json->jest->moduleNameMapper - This lets jest know about the aliases
 * tsconfig.json->paths - This will ensure we have intellisense
 */
module.exports = Object.assign({
    "ui-module": path.resolve(PATHS.UI_ROOT, "modules"),
});
