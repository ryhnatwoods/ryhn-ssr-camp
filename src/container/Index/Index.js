import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../../action/mainAction'
import withStyle from '../../WithStyle'
import styles from './Index.css'
function Index(props) {
    const [count, setCount] = useState(1);
    useEffect(() => {
        const size = props.list.length;
        if(size === 0){
            props.getIndexList();
        }
    }, [])
    return <div className={styles.container}>
                <h1 className={styles.title}>This is my demo react SSR, provied by {props.title}</h1>
                <p>if you like it, please star it. current star is {count}🌟</p>
                <button onClick={() => setCount(count+1)}>点赞👍</button>
                <hr/>
                <ul>
                    {
                        props.list.map(element => {
                            return <li key={element.id}>{element.name}</li>
                        })
                    }
                </ul>
           </div>
}

Index.loadData = (store) => {
    //通过传递全局的store对象，手动派发一个更新store的操作
    return store.dispatch(getIndexList());
}

export default connect(
    state=>({
        list: state.index.list
    }),
    { getIndexList }
)(withStyle(Index, styles));