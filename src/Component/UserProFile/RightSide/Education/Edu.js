import React from 'react'
import ExpText from '../Experience/ExpText'
import TextHead from '../Info&About/TextBlock/TextHead'
import './Edu.css';

const Edu = () => {
  return (
    <div id='setEdu'>     {/*TextHead  data pass TextBlock Component */}
        <TextHead title='Education' />
        <ExpText title='louisiana state university' text='master of business administration - MBA, Data Science' date='2020 - 2021' />
    </div>
  )
}



export default Edu