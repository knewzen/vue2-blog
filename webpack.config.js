const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const is_production = process.env.NODE_ENV === 'production';

let vue_options = {};
if (is_production) {
    vue_options.loaders = {
        css: ExtractTextPlugin.extract({
            loader: 'css-loader?sourceMap!postcss-loader?sourceMap',
            fallbackLoader: 'vue-style-loader?sourceMap'
        }),
        scss: ExtractTextPlugin.extract({
            loader: 'css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap',
            fallbackLoader: 'vue-style-loader?sourceMap'
        }),
    };
}else{
    vue_options.loaders = {
        css: 'vue-style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap',
        scss: 'vue-style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap',
    };
}

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vue_options
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: vue_options.loaders.scss
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name]-[hash:5].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.min.js',
            'vue-router': 'vue-router/dist/vue-router.min.js',
            'vue-resource': 'vue-resource/dist/vue-resource.min.js',
            'vuex': 'vuex/dist/vuex.min.js',
        }
    },
    plugins: [
        // new webpack.LoaderOptionsPlugin({
        // vue: vue_options
        // }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     "window.jQuery": 'jquery',
        // }),
        new HtmlWebpackPlugin({
            title: 'vue2',
            template: './src/index.html',
            filename: './index.html',
            inject: true,
            //favicon: 'client/assets/logo.png'
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            },
            hash: true
        })
    ],
    // externals: {
    //     'AMap': 'AMap'
    // },
    performance: {
        hints: false, //关闭警告
    },
    devtool: '#cheap-module-eval-source-map',//cheap-module-eval-source-map | cheap-module-source-map | eval | eval-source-map
    devServer: {
        // https: true,
        historyApiFallback: true,
        noInfo: true,
        compress: true,
        contentBase: "./dist/",
        host: '0.0.0.0',
        port: 5211, //Math.floor(Math.random() * (65535 - 1024)) + 1024,
    },
};

if (is_production) {
    // module.exports.devtool = '#source-map';
    // module.exports.devtool = '#cheap-module-source-map';
    module.exports.devtool = false;
    //http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new ExtractTextPlugin('app.css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
