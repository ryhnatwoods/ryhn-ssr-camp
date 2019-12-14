import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'

const reducers = combineReducers({
    index: indexReducer,
    user: userReducer
});

// const store = createStore(reducers, applyMiddleware(thunk))

// export default store;

//分别导出客户端的store接口和服务端的store接口
//能不能只用客户端和服务器共用一个store
export const getClientStore = () => {
    console.log("the type of window.__type", typeof window.__context);
    let defaultState = window.__context || {};
    return createStore(reducers, defaultState, applyMiddleware(thunk));
}

export const getServerStore = () => {
    return createStore(reducers, applyMiddleware(thunk));
}