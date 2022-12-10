import React from 'react'

const TextHead = (props) => {
    const {title} = props;
    return (
        <div id='settext'>
            <h2>{title}</h2>
            <h2><i className="fa-solid fa-pen"></i></h2>
        </div>
    )
}

export default TextHead