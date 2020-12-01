const path = require("path");
const PATHS = require("./paths");
const ALIASES = require("./aliases");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = env => {
    return {
        entry: {
            index: path.resolve(PATHS.UI_ROOT, "index.tsx"),
        },
        resolve: {
            alias: ALIASES,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(ts|tsx)?$/,
                    loader: "awesome-typescript-loader",
                    exclude: /node_modules/
                },
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.json', ".tsx"]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(PATHS.UI_ROOT, "index.html"),
                filename: "index.html",
            }),
        ],
    }
};