import React from 'react';
import TextHead from '../Info&About/TextBlock/TextHead';
import './Lan.css';

const Lan = () => {
  return (
    <div className='container-fluid' id='mainLan'>
        <TextHead title='languages' />
        <div className='setbtnLan'>
            <button>English</button>
            <button>Spanish</button>
        </div>
    </div>
  )
}

export default Lan