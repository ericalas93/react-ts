const path = require("path");
const PATHS = require("./paths");
const ALIASES = require("./aliases");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (env) => {
    return {
        entry: {
            index: path.resolve(PATHS.UI_ROOT, "index.tsx"),
        },
        resolve: {
            alias: ALIASES,
            extensions: [".ts", ".js", ".json", ".tsx"],
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.(ts|tsx)?$/,
                    loader: "awesome-typescript-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(woff|eot|ttf|gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: "file-loader",
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(PATHS.UI_ROOT, "index.html"),
                filename: "index.html",
            }),
        ],
    };
};
