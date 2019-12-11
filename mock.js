//mock data
const express = require("express");
const app = express();

app.get("/api/course/list", (req, res) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.json({
        code: 0,
        list: [
            {
                name: '前端全栈架构师',
                id: 1
            },
            {
                name: '前端高级工程师',
                id: 2
            },
            {
                name: '机器学习',
                id: 3
            },
            {
                name: 'java高级架构师',
                id: 4
            }
        ]
    });
})

app.listen(9090, () => {
    console.log("mock server is up!");
})