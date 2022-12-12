import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import wellcomePage from '../img/FeedNew/cons6.jpg';
import './WellCome.css';

const WellCome = () => {

  let navigate = useNavigate()

  useEffect(()=>{
    let auth = localStorage.getItem('token');
    if(auth){
      navigate('/newsfeed')
    }
  },[])
  return (
    <div className='col-md-12' id='MainWellPage'>
        <div id='ImgPageWell'>
            <img src={wellcomePage} alt='wellcome page' />
        </div>
        <div id='WellBTNPag'>
            <h1>Welcome</h1>
            <h5>to our community</h5>
            <div id='wellBTN'>
            <NavLink id='BTNWelCom' to='/signin'>sign In</NavLink>
            <NavLink id='BTNWelCom' to='/signup'>sign Up</NavLink>
            </div>
        </div>
        <div id='WellComeText'>
            <h3>By some definitions, workers may be engaged in manual labour[1] as unskilled or semi-skilled workers; they may be skilled tradespeople; or they may be supervisory or managerial personnel. Under safety legislation in the United Kingdom, for example, construction workers are defined as people "who work for or under the control of a contractor on a construction site";[2] in Canada, this can include people whose work includes ensuring conformance with building codes and regulations, and those who supervise other workers
                
            </h3>
        </div>
    </div>
  )
}

export default WellCome