const path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "index.js"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        pathinfo: false
    },
    resolve: {
        extensions: [".js", ".json", ".scss", ".css"],
        alias: {
            fonts: path.join(__dirname, "assets", "fonts"),
        }
    },
    watch: true,
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        emitFile: false,
                        name: '[path][name].[ext]',
                    }
                } 
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        emitFile: false,
                        name: '[path][name].[ext]',
                        limit: 8000,
                    }
                }  
            },
            {
                test: /\.pug$/,
                loader: "pug-loader"
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: "./index.pug" }),
        new CopyWebpackPlugin([{ from: 'assets/**/*' }]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

    ]
}