import React from 'react'
import TextHead from '../../../Component/AdminProfile/RightSide/Info&About/TextBlock/TextHead'
import UserVisitSkill from './UserVisitSkill'
import '../MainVisitUser/AllUserVisitCSS.css'

const MainUVisitSkill = () => {
  return (
    <div className='visitEdu'>
        <TextHead title='skill' icon='' />
        <UserVisitSkill />
    </div>
  )
}

export default MainUVisitSkill