import React from 'react'
import path from 'path'
import fs from 'fs'
import { renderToString } from 'react-dom/server'
import express from 'express'
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom'
import routes from '../src/App'
import {Provider} from 'react-redux'
import { getServerStore } from '../src/store/store'
import Header from "../src/component/Header"
import User from '../src/container/User/User'
import proxy from 'http-proxy-middleware'

const store = getServerStore();
const app = express();
app.use(express.static("public"));
app.use('/api',
proxy({ target: 'http://localhost:9090', changeOrigin: true }))
function csrRender(res) {
    //此函数的目的是将输出的html模版读取并写入到response里
    //step1 获取模版路径
    const filepath = path.resolve(process.cwd(), 'public/index.csr.html');
    const html = fs.readFileSync(filepath, 'utf-8');
    return res.send(html);
}
app.get('*', (req, res) => {
    //检查url参数中是否存在csr， 如果有就开启客户端渲染的指令
    const isOpenCSR = req.query._mode;
    if(isOpenCSR && isOpenCSR.toLowerCase() === 'csr'){
        console.log('csr mode is open for now!!');
        csrRender(res);
    }else{
        const promises = [];
        routes.some(route => {
            const match = matchPath(req.path, route);
            if(match) {
                const { loadData } = route.component;
                if(loadData) {
                    promises.push(loadData(store))
                }
            }
            // return match;
        });
        
        Promise.all(promises).then(() => {
            const context = {
                css: []
            };
            //把react组建，解析成html
            const content = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        <Header />
                            <Switch>
                                {
                                    routes.map(route => {
                                        return (
                                            <Route {...route}></Route>
                                        )
                                    })
                                }
                            </Switch>
                    <User />
                    </StaticRouter>
                </Provider>
            );
            if(context.statuscode){
                res.status(context.statuscode);
            }
            if(context.action == "REPLACE"){
                res.redirect(301, context.url);
            }
            const css = context.css && context.css.length > 0 ? `<style>${context.css.join("\n")}</style>` : '';
            console.log("css outpt: ", css);
            //字符串模版
            res.send(`
                <html>
                    <head>
                        <meta charset="utf-8" />
                        <title>React SSR</title>
                        ${css}
                    </head>
                    <body>
                        <div id="root">${content}</div>
                        <script>
                            window.__context = ${JSON.stringify(store.getState())}
                        </script>
                        <script src="/bundle.js"></script>
                    </body>
                </html>
            `)
        });
    }
})

app.listen(9093, () => {
    console.log("listen done");
})