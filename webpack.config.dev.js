const {merge} = require('webpack-merge')
const common = require('./webpack.config.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    }
})
