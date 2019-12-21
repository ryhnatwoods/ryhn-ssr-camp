import React from 'react'

export default function WithStyle(Comp, styles) {
    return props => {
        if(props.staticContext && props.staticContext.css && Array.isArray(props.staticContext.css)){
            props.staticContext.css.push(styles._getCss())
        }
        return <Comp {...props} />
    }
}
