const WebPackMerge = require('webpack-merge')
const BaseConfig = require('./base.config')

module.exports = WebPackMerge.merge(BaseConfig,{
    devServer: {
        contentBase: './dist',
        inline: true
    }
})