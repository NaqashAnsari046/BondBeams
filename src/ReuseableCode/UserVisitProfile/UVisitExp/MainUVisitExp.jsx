import React from 'react'
import UserExpVist from './UserExp'
import TextHead from '../../../Component/AdminProfile/RightSide/Info&About/TextBlock/TextHead'
import '../MainVisitUser/AllUserVisitCSS.css'

const UVisitExp = () => {
  return (
    <div className='visitEdu'>
        <TextHead title='Exp' icon='' />
        <UserExpVist />
    </div>
  )
}

export default UVisitExp