import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import { StaticRouter, matchPath, Route } from 'react-router-dom'
import routes from '../src/App'
import {Provider} from 'react-redux'
import { getServerStore } from '../src/store/store'
import Header from "../src/component/Header"
import User from '../src/container/User'
const store = getServerStore();
const app = express();
app.use(express.static("public"));
app.get('*', (req, res) => {
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
        //把react组建，解析成html
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Header />
                  {
                      routes.map(route => {
                          return (
                              <Route {...route}></Route>
                          )
                      })
                  }
                  <User />
                </StaticRouter>
            </Provider>
        );
        //字符串模版
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>React SSR</title>
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
    
    
})

app.listen(9093, () => {
    console.log("listen done");
})