//action type
const GET_LIST = "INDEX/GET_LIST";
//action creator
const changeList = list => ({
    type: GET_LIST,
    list
})

//异步请求
const getIndexList = () => {
    return (dispatch, getState, $axios) => {
        return $axios.get("/api/course/list").then(res => {
            const {list} = res.data;
            console.log("update list: ", list);
            dispatch(changeList(list));
        }).then(null,
            err => {
                console.log("Error: ", err);
                return Promise.resolve();
        });
    }
}

export {
    GET_LIST,
    getIndexList
}