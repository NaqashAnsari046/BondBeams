import React from 'react';
import './Stock.css';
import img from '../../../img/FeedNew/img1.jfif'


const Stock = () => {
    return (
        <div id='setRightFeed'>
            <img src={img} alt='Feed New' />
            <div id='setFedtext'>
                <h2>
                    <b>jacob singer </b>liked your post
                </h2>
                <h4>Now</h4>
            </div>
        </div>
    )
}

export default Stock