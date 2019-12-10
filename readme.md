"dev:server:build": "webpack --config webpack.server.js --watch", //编译打包文件到目录“./build/bundle.js”
"dev:server:start": "nodemon --watch build --exec node \"./build/bundle.js\"", //启动node服务器
//编译期间不需要引用的依赖，但是在运行期需要引用的依赖

issues:
/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/cli.js:93
                                throw err;
                                ^

Error: Cannot find module '/Users/wangning/Desktop/ryhn-ssr-camp/webpack.server.js'
Require stack:
- /Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/utils/convert-argv.js
- /Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/cli.js
- /Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack/bin/webpack.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:797:15)
    at Function.Module._load (internal/modules/cjs/loader.js:690:27)
    at Module.require (internal/modules/cjs/loader.js:852:19)
    at require (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)
    at WEBPACK_OPTIONS (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/utils/convert-argv.js:114:13)
    at requireConfig (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/utils/convert-argv.js:116:6)
    at /Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/utils/convert-argv.js:123:17
    at Array.forEach (<anonymous>)
    at module.exports (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/utils/convert-argv.js:121:15)
    at /Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/cli.js:71:45
    at Object.parse (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/yargs/yargs.js:567:18)
    at /Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/cli.js:49:8
    at Object.<anonymous> (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/cli.js:366:3)
    at Module._compile (internal/modules/cjs/loader.js:959:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)
    at Module.load (internal/modules/cjs/loader.js:815:32)
    at Function.Module._load (internal/modules/cjs/loader.js:727:14)
    at Module.require (internal/modules/cjs/loader.js:852:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack/bin/webpack.js:156:2)
    at Module._compile (internal/modules/cjs/loader.js:959:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)
    at Module.load (internal/modules/cjs/loader.js:815:32)
    at Function.Module._load (internal/modules/cjs/loader.js:727:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1047:10)
    at internal/main/run_main_module.js:17:11 {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/utils/convert-argv.js',
    '/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack-cli/bin/cli.js',
    '/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/webpack/bin/webpack.js'
  ]
}

配置文件的文件名写错了。webpack.sever.js -> webpack.server.js

