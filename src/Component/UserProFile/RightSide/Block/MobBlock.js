import React from 'react';
import  work2 from '../../../img/FeedNew/cons5.avif'
import worker from '../../../img/MyProfile/worker1.webp'

import './Block.css';

const Block = () => {
  return (
    <div className='row' id='setmainworker'>
        <div className='col-md-4'>
            <div className='col-md-12 setpro' id='setworker'>
            <img src={worker} alt="woker1" />
            </div>
        </div>
        <div className='col-md-8'>
        <div className='col-md-12 setprofile' id='setworker'>
            <img src={work2} alt="woker1" />
            </div>
        </div>
    </div>
  )
}

export default Block