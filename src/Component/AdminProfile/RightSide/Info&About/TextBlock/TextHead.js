import React from 'react'
import { NavLink } from 'react-router-dom';
import '../TextBlock/Text.css';

const TextHead = (props) => {
    const {title, icon} = props;

    return (
        <div id='settext'>
            <h2 id='textHeader'>{title}</h2>
            <h2 id='writeIcon'>{icon}</h2>
        </div>
    )
}

export default TextHead