import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'
import axios from 'axios'
const reducers = combineReducers({
    index: indexReducer,
    user: userReducer
});

const serverAxios = axios.create({
    baseURL: "http://localhost:9090/"
});

const clientAxios = axios.create({
    baseURL: "/"
});

// const store = createStore(reducers, applyMiddleware(thunk))

// export default store;

//分别导出客户端的store接口和服务端的store接口
export const getClientStore = () => {
    console.log("the type of window.__type", typeof window.__context);
    let defaultState = window.__context || {};
    return createStore(reducers, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}

export const getServerStore = () => {
    return createStore(reducers, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}