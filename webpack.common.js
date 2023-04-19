const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    cache: {
        type: 'filesystem',
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new Dotenv({
            systemvars: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Forecast',
            template: './public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/icons', to: 'icons' },
                { from: 'public/images', to: 'images' },
                { from: 'public/logo', to: 'logo' },
                {
                    from: './src/assets/images/logo',
                    to: 'src/assets/images/logo',
                },
                {
                    from: './src/assets/images/pictures',
                    to: 'src/assets/images/pictures',
                },
                {
                    from: './src/redirects',
                    to: './',
                },
                {
                    from: './src/settings/locales',
                    to: 'src/settings/locales',
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        sources: {
                            list: [
                                {
                                    tag: 'img',
                                    attribute: 'src',
                                    type: 'src',
                                },
                            ],
                        },
                    },
                },
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};
