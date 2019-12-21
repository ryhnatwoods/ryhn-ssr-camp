const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./client/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "public")
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'SSR Camp',
            filename: 'index.csr.html',
            template: 'src/tmpl/index.csr.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react', ['@babel/preset-env']]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    }
}