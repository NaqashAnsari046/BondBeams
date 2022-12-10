import React from 'react'
import TextHead from '../../../Component/AdminProfile/RightSide/Info&About/TextBlock/TextHead'
import UserEdu from './UserEdu'
import '../MainVisitUser/AllUserVisitCSS.css'

const MainEdu = () => {
  return (
    <div className='visitEdu'>
        <TextHead title='edu' icon='' />
        <UserEdu />
    </div>
  )
}

export default MainEdu