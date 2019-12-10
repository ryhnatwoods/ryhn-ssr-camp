import React, { useState } from 'react'

function App(props) {
    const [count, setCount] = useState(1);
    return <>
                <h1>This is my demo react SSR, provied by {props.title}</h1>
                <p>if you like it, please star it. current star is {count}🌟</p>
                <button onClick={() => setCount(count+1)}>点赞👍</button>
           </>
}

export default <App title="开课吧"></App>