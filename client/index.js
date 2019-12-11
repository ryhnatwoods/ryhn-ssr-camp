import React from 'react';
import ReactDom from 'react-dom';
import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../src/store/store'

const Page = <Provider store={store}>
    <BrowserRouter>
        {App}
    </BrowserRouter>
</Provider>
    
//不做渲染，只是绑定监听
ReactDom.hydrate(Page, document.getElementById("root"));