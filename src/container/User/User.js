import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserDetail } from '../../action/userAction'
import styles from './User.css'
import { Redirect } from 'react-router-dom';
function User(props) {
    //need login
    // return <Redirect to='/about'></Redirect>;
    useEffect(() => {
        const data = props.user;
        if(Object.keys(data).length === 0 && data.constructor === Object){
            props.getUserDetail();
        }
    }, []);
    const columnStyle = {
        "display":"flex",
        "flexDirection": "column"
    };
    const rowStyle = {
        "display":"flex",
        "flexDirection": "row",
        "justifyContent": "space-between"
    }
    const Userinfo = (<>
                <h1 className={styles.title}>用户详细信息预览</h1>
                <hr />

                <div style={columnStyle}>
                    <div style={rowStyle}>
                        <div>姓名</div>
                        <div>{props.user.familyName} {props.user.surname}</div>
                    </div>
                    <div style={rowStyle}>
                        <div>手机号</div>
                        <div>{props.user.mobile}</div>
                    </div>
                    <div style={rowStyle}>
                        <div>所在部门</div>
                        <div>{props.user.department}</div>
                    </div>
                    <div style={rowStyle}>
                        <div>职位</div>
                        <div>{props.user.post}</div>
                    </div>
                </div>
           </>);
    
    return Userinfo;
}

User.loadData = (store) => {
    //通过传递全局的store对象，手动派发一个更新store的操作
    return store.dispatch(getUserDetail());
}

export default connect(
    state=>({
        user: state.user.data
    }),
    {getUserDetail}
)(User);