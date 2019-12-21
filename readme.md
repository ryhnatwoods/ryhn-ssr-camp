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

concurrently lib能够同时跑多个命令

staticrouter -> 服务端路由
browserrouter -> 前端路由

TypeError: Cannot read property 'location' of undefined
[2]     at new Router (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/react-router/cjs/react-router.js:89:31)
[2]     at processChild (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/react-dom/cjs/react-dom-server.node.development.js:3159:14)
[2]     at resolve (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/react-dom/cjs/react-dom-server.node.development.js:3124:5)
[2]     at ReactDOMServerRenderer.render (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/react-dom/cjs/react-dom-server.node.development.js:3598:22)
[2]     at ReactDOMServerRenderer.read (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/react-dom/cjs/react-dom-server.node.development.js:3536:29)
[2]     at renderToString (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/react-dom/cjs/react-dom-server.node.development.js:4245:27)
[2]     at eval (webpack:///./server/index.js?:20:88)
[2]     at Layer.handle [as handle_request] (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/express/lib/router/layer.js:95:5)
[2]     at next (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/express/lib/router/route.js:137:13)
[2]     at Route.dispatch (/Users/wangning/Desktop/ryhn-ssr-camp/node_modules/express/lib/router/route.js:112:3)

这个issue是因为在注册路由时错误的使用了Router标签而不是Route标签

实现node服务器端预加载数据。

通过捕获异常信息设置Promise.resolve的方式。使promise不会中断执行。

配置proxy，允许非跨域的网络请求

安装做同构应用的style-loader

## 17/18 节 总结使用promise包装有问题的api，记录错误日志，同时返回promise对象以保障程序的正常运行
            分别使用，客户端和服务端的axios实例，安装http-middleware-proxy，代理客户端的请求实现跨域

## 19 节， 添加favcon

## 20 节， wepback配置style-loader,css-loader, 添加全局的css

## 21, 22, 23, 24 节, 添加错误状态码支持，  服务层面优化，当服务端压力过大，可以进行横向扩展，通过将同一应用部署在多个node服务节点，利用网关的负载均衡来提高服务的性能， 对于降级渲染
可以采用关闭服务端渲染直接进行客户端渲染的方式

## 25， 26优化css组件，实现服务端css模块化
