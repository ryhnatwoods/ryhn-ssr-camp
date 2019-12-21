//服务端的打包接口配置
const path = require("path");
//目的就是为了不打包node_modules中的依赖
const nodeExternals = require('webpack-node-externals');
module.exports = {
    target: "node",
    mode: "development",
    entry: "./server/index.js",
    externals: [nodeExternals()], 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
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
                use: ['isomorphic-style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            }
        ]
    }
}