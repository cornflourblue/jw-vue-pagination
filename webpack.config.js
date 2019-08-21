var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    entry: './src/JwPagination.vue',
    output: {
        path: path.resolve('lib'),
        filename: 'JwPagination.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.vue?$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}