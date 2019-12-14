import React from 'react';
import ReactDom from 'react-dom';
import routes from '../src/App';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import { getClientStore } from '../src/store/store'
import Header from "../src/component/Header"

const Page = (<Provider store={getClientStore()}>
    <BrowserRouter>
        <Header />
        {routes.map(route => {
                return (
                    <Route {...route}></Route>
                )
            })}
    </BrowserRouter>
</Provider>)
    
//不做渲染，只是绑定监听
ReactDom.hydrate(Page, document.getElementById("root"));