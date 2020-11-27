var path = require('path');
const { VueLoaderPlugin} = require('vue-loader')

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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}