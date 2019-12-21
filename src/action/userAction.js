//action type
const GET_USERINFO = "INDEX/GET_USERINFO";
//action creator
const viewUser = data => ({
    type: GET_USERINFO,
    data
})

//异步请求
const getUserDetail = () => {
    return (dispatch, getState, $axios) => {
        return $axios.get("/api/user/details").then(res => {
            const {data} = res.data;
            console.log("update user: ", data);
            dispatch(viewUser(data));
        }).then(null,
            err => {
                console.log("Error: ", err);
                return Promise.resolve();
        });
    }
}

export {
    GET_USERINFO,
    getUserDetail
}