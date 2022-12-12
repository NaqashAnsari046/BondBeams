import React from 'react'
import img from '../../../img/MyProfile/work1.png';
import './Group.css'

const Group = (props) => {
    const {title,tit1,like} = props 
  return (
    <div className='group'>
        <h1>{title}</h1>
        <div className='row setmainemp'>
          <div className='col-md-2 col-3 col-lg-1' id='empinnergroup'>
            <img src={img} alt='icon' />
          </div>
          <div className='col-md-10 col-9 col-lg-10' id='setGroup'>
          <h1>{tit1}</h1>
            <span>{like}</span>
          </div>
           
        </div>
    </div>
  )
}

export default Group