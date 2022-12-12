import React from 'react';
import './Text.css';
import TextHead from './TextHead';

const Text = () => {
  return (
    <div id='setmaintext'>
      <TextHead title={'info'} />
      <ul id='setlitext'>

        <h6><i className="fa-solid fa-briefcase"></i><li> web  debeloper at <span>hisoft</span></li></h6>
        <h6><i className="fa-sharp fa-solid fa-graduation-cap"></i><li> studied at <span>university of science & technology</span></li></h6>
        <h6><i className="fa-solid fa-location-dot"></i><li> lives in <span>tongass hwy, ketchikan, alaska 99901, USA</span></li></h6>
        <li><i className="fa-solid fa-heart"></i> single</li>
        <li><i className="fa-solid fa-phone"></i> (907) 220-9964</li>
      </ul>
    </div>
  )
}

export default Text