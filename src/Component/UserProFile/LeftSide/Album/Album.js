import React from 'react'
import img from '../../../img/MyProfile/work1.png';
import './Album.css'


const Album = () => {
  return (
    <div className='mainAlbum'>
        <h1>Albums</h1>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-6'>
                    <div id='setimgH'>
                        <img src={img} alt='aimg' />
                    </div>
                    <div id='setimgh'>
                        <img src={img} alt='aimg' />
                    </div>
                    <div id='setimgh'>
                        <img src={img} alt='aimg' />
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 col-6'>
                    <div id='setimgh1'>
                        <img src={img} alt='aimg' />
                    </div>
                    <div id='setimgH11'>
                        <img src={img} alt='aimg' />
                    </div>
                    <div id='setimgH1'>
                        <img src={img} alt='aimg' />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Album