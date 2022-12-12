import React from 'react'
import TextHead from '../Info&About/TextBlock/TextHead'
import './Pro.css'

const Pro = () => {
  return (
    <div id='mainPro'>
        <TextHead title='Projects' />
        <h3>uber app </h3>
          <span>jan 2019- jan2022</span>  
        <div id='setinnerPro'>
           <h5>associated with <b>uber</b></h5>
           <button>Show Project</button>
        </div>
    </div>
  )
}

export default Pro