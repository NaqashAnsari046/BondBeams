import React from 'react'
import TextHead from '../Info&About/TextBlock/TextHead'
import  work2 from '../../../img/MyProfile/work2.jfif'

import './Skill.css'

const Skill = () => {
  return (
    <div id='setSkill'>
        <TextHead title='Skill' />
        <div className='row' id='setRowSkil'>
            <h1>javascript</h1>
                <div className='col-md-1 col-2 col-lg-1 ' id='setSikkImg'>
                    {/* <img src={work2} alt='language' /> */}
                    <i className="fa-solid fa-users"></i>
                </div>
                <div className='col-md-10 col-10 col-lg-11'>
                    <h3>62 endorsements</h3>
                </div>
        </div>
    </div>
  )
}

export default Skill