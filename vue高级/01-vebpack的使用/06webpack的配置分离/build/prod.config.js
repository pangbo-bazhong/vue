const UglifyWebPackPlugin = require('uglifyjs-webpack-plugin')
const WebPackMerge = require('webpack-merge')
const BaseConfig = require('./base.config')

module.exports = WebPackMerge.merge(BaseConfig,{
    plugins: [
        new UglifyWebPackPlugin()
    ]
})
