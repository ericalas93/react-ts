const path = require("path");
const PATHS = require("./paths");
const { merge } = require('webpack-merge');
const common = require("./webpack.common");

module.exports = env => {
    return merge(common(env), {
        mode: "development",
        devtool: process.env.SOURCE_MAP || "inline-source-map",
        devServer: {
            contentBase: path.resolve(PATHS.UI_ROOT),
            port: process.env.DEV_SERVER_PORT || 8080,
            inline: process.env.DEV_SERVER_INLINE === "false" ? false : true 
        },
    })
}