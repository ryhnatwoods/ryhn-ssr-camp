import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express();
app.use(express.static("public"));
app.get('/', (req, res) => {
    //把react组建，解析成html
    const content = renderToString(App);
    //字符串模版
    res.send(`
        <html>
            <head>
                <meta charset="utf-8" />
                <title>React SSR</title>
            </head>
            <body>
                <main role="main">
                    <section id="root">
                        ${content}
                    </section>
                </main>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `)
})

app.listen(9093, () => {
    console.log("listen done");
})