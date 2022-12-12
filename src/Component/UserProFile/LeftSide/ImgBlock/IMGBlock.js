import React from 'react';
import './Block.css';
import img from '../../../img/MyProfile/work1.png';


const IMGBlock = (props) => {
    let {title} = props;
    return (
        <div className='setmainBlock'>
            <h1>{title}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3 col-3" id='setimgSet'>
                        <img src={img} alt='img' />
                    </div>
                    <div className="col-md-4 col-lg-3 col-3" id='setimgSet'>
                        <img src={img} alt='img' />
                    </div>
                    <div className="col-md-4 col-lg-3 col-3" id='setimgSet'>
                        <img src={img} alt='img' />
                    </div>
                    <div className="col-md-4 col-lg-3 col-3" id='setimgSet'>
                        <img src={img} alt='img' />
                    </div>
                    <div className="col-md-4 col-lg-3 col-3" id='setimgSet'>
                        <img src={img} alt='img' />
                    </div>
                    <div className="col-md-4 col-lg-3 col-3" id='setimgSet'>
                        <img src={img} alt='img' />
                    </div>
                    <div className="col-md-4 col-lg-3 col-3" id='setimgSet'>
                        <img src={img} alt='img' />
                    </div>
                    <div className="col-md-4 col-lg-3 col-3" id='setimgSet'>
                        <img src={img} alt='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IMGBlock