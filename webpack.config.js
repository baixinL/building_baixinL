const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        index:'./src/script/index.js',
        vendor:['react','react-dom']
    },
    output:{
        path:path.resolve(__dirname,'build/script'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include:[
                    path.resolve(__dirname,'src/script')
                ],
                loader:'babel-loader'
            },
            {
                test:/\.less$/,
                //内联样式
                // use:[
                //     {
                //         loader: 'style-loader',
                //     },
                //     {
                //         loader: 'css-loader',
                //     },
                //     {
                //         loader: 'less-loader',
                //     }
                // ]
                //外联样式
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                        }
                    ]
                })
            }
        ]
    },
    mode:'production',
    plugins: [
        new ExtractTextPlugin({
            filename:"../style/style.css",
            disable:process.env.NODE_ENV=='development'
        }),
        // new webpack.optimize.ModuleConcatenationPlugin()
        // new webpack.optimize.CommonsChunkPlugin({
        //
        // })
    ],
    optimization:{
        // usedExports: true,
        splitChunks:{
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 2
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    // externals: {
    //     //外部js的名称：全局变量
    //     "react":"React",
    //     "react-dom":"ReactDOM",
    // }

}
