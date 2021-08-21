import React from 'react'

function Alert(props) {
    const captialize = (word) => {
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
           <strong>{captialize(props.alert.type)}</strong> : {props.alert.message}
        </div>
    )
}

export default Alert
