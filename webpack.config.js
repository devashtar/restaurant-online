// переменные окружения для конфигурации webpack
require('dotenv').config()
// переменные окружения для приложения
const Dotenv = require('dotenv-webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')

// УКАЗЫВАЕМ URL ДЛЯ PRODUCTION(обязательно слэш в конце URL)
// ПРИМЕР: https://www.example.com/
const PRODUCTION_URL = process.env.PRODUCTION_URL || ''

module.exports = (env) => {
    const isDev = env.mode === 'development'
    const isProd = !isDev

    const optimization = () => {
        const config = {
            splitChunks: {
                chunks: 'all',
            },
            minimize: isProd,
        }

        if (isProd) {
            config.minimizer = [
                new CssMinimizerPlugin({
                    minimizerOptions: {
                        preset: [
                            'default',
                            {
                                discardComments: { removeAll: true },
                            },
                        ],
                    },
                }),
                new TerserWebpackPlugin(),
            ]
        }

        return config
    }

    const filename = (ext) =>
        isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

    const cssLoaders = (extra) => {
        const loaders = [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {},
            },
            'css-loader',
        ]

        // поддержка autoprefixer для браузеров нуждающихся в них
        // работает в зависимости от настройки "browserslist" в "package.json"
        if (isProd) {
            loaders.push({
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: ['autoprefixer'],
                    },
                },
            })
        }

        if (extra) {
            loaders.push(extra)
        }

        return loaders
    }

    const babelOptions = (preset) => {
        const opts = {
            presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
        }

        if (preset) {
            opts.presets.push(preset)
        }

        return opts
    }

    const jsLoaders = () => {
        const loaders = [
            {
                loader: 'babel-loader',
                options: babelOptions(),
            },
        ]

        return loaders
    }

    const plugins = () => {
        const base = [
            new Dotenv({ path: '.env.geoservice' }),
            new EnvironmentPlugin({
                SRC_DIR: path.join(__dirname, 'src'),
            }),
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                minify: {
                    collapseWhitespace: isProd,
                },
            }),
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'public'),
                        to: path.resolve(__dirname, 'dist'),
                        noErrorOnMissing: true,
                        globOptions: {
                            // HTMLWebpackPlugin уже формирует html файл
                            // поэтому здесь мы его игнорируем(не копируем)
                            ignore: ['**/index.html'],
                        },
                    },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: filename('css'),
            }),
        ]

        return base
    }

    // ВОЗВРАЩАЕМ КОНФИГУРАЦИЮ WEBPACK
    return {
        stats: 'errors-warnings',
        context: path.resolve(__dirname, 'src'),
        mode: 'development',
        entry: {
            main: ['@babel/polyfill', './index.tsx'],
        },
        target: isDev ? 'web' : 'browserslist',
        output: {
            filename: filename('js'),
            path: path.resolve(__dirname, 'dist'),
            publicPath: isDev ? '' : PRODUCTION_URL,
        },
        resolve: {
            extensions: ['.js', '.tsx', '.scss'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@types': path.resolve(__dirname, 'src/types'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@containers': path.resolve(__dirname, 'src/containers'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@store': path.resolve(__dirname, 'src/store'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@assets': path.resolve(__dirname, 'src/assets'),
            },
        },
        optimization: optimization(),
        devServer: {
            historyApiFallback: true,
            client: {
                logging: 'none',
            },
            static: {
                directory: path.join(__dirname, 'public'),
            },
            port: 5500,
            hot: isDev,
        },
        devtool: isDev ? 'source-map' : false,
        plugins: plugins(),
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: cssLoaders(),
                },
                {
                    test: /\.s[ac]ss$/,
                    use: cssLoaders('sass-loader'),
                },
                {
                    test: /\.(png|jpg|jpeg|svg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(ttf|woff|woff2|eot)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: jsLoaders(),
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: babelOptions('@babel/preset-typescript'),
                    },
                },
            ],
        },
    }
}
