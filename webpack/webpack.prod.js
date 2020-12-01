const path = require("path");
const PATHS = require("./paths");
const { merge } = require('webpack-merge');
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = env => {
    return merge(common(env), {
        mode: "production",
        optimization: {
            minimizer: [
                new TerserPlugin({
                    parallel: 4,
                }),
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            // new ManifestPlugin(), Webpack5 not supported yet: https://github.com/shellscape/webpack-manifest-plugin/issues/222
        ],
        output: {
            path: path.resolve(PATHS.ROOT, "dist"),
            filename: "bundle.[fullhash].js"
        }
    })
}