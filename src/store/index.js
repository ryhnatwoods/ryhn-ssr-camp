import { GET_LIST } from "../action/mainAction"

const defaultState = {
    list: []
}

export default (state=defaultState, action) => {
    switch(action.type){
        case GET_LIST:
            console.log(action);
            return {
                ...state,
                list: action.list
            }
        default:
            return state
    }
}