import axios from 'axios'

//action type
const GET_LIST = "INDEX/GET_LIST";
//action creator
const changeList = list => ({
    type: GET_LIST,
    list
})

//异步请求
const getIndexList = () => {
    return dispatch => {
        return axios.get("http://localhost:9090/api/course/list").then(res => {
            const {list} = res.data;
            dispatch(changeList(list))
        })
    }
}

export {
    GET_LIST,
    getIndexList
}