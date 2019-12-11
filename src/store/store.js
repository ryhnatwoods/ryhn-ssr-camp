import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'

const reducers = combineReducers({
    index: indexReducer
});

const store = createStore(reducers, applyMiddleware(thunk))

export default store;