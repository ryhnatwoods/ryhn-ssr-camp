import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './container/Index'
import About from './container/About'
import User from './container/User'

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
        // exact: true,
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
        path: "/user",
        exact: true,
        component: User,
        key: "user"
    }
];