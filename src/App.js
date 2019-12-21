import React, { useState } from 'react'
import Index from './container/Index'
import About from './container/About/About'
import Login from './container/Login'
import User from './container/User/User'
import Notfound from './container/notfound/404'
// import './App.css'
// export default (
//     <>
//         <Route path="/" exact component={Index}></Route>
//         <Route path="/about" exact component={About}></Route>
//     </>
// );

//导出路由配置
export default [
    {
        path: "/",
        exact: true,
        component: Index,
        key: "index"
    },
    {
        path: "/about",
        exact: true,
        component: About,
        key: "about"
    },
    {
        path: "/login",
        exact: true,
        component: Login,
        key: "login"
    },
    {
        path: "/user",
        exact: true,
        component: User,
        key: "user"
    },
    {
        component: Notfound,
        key: "404"
    }
];