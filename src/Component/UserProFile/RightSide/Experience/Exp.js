import React, {useState, useEffect} from 'react'
import TextHead from '../Info&About/TextBlock/TextHead'
import './Exp.css';
import ExpText from './ExpText';
import ExpData from './ExpData';


const Exp = () => {
  return (
    <div className='exptext'>
        <TextHead title={'experience'} />
        {/* {Exp.length>0 && (<ExpText ExpDatas={Exp} />)} */}
        {/* <ExpText ExpDatas={Exp} /> */}
    </div>
  )
}

export default Exp