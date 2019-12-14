import { GET_USERINFO } from "../action/userAction"

const defaultState = {
    data: []
}

export default (state=defaultState, action) => {
    switch(action.type){
        case GET_USERINFO:
            console.log("data: ", action);
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}