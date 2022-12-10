import React from 'react'
// import img from '../../img/work1.png'
// import '../Album/Ablum.css'
// import '../Album/Album.css'
import img from '../../../img/MyProfile/con1.jfif';


import '../Product/Product.css'


const Product = () => {
  return (
    <div  id='setCon'>
        <h1>Products</h1>
            <div className='row'>
                
                    <div id='setimgh' className='col-md-6 col-lg-6 col-6'>
                        <img src={img} alt='aimg' />
                    </div>
                    <div id='setimgh' className='col-md-6 col-lg-6 col-6'>
                        <img src={img} alt='aimg' />
                    </div>
                    <div id='setimgh' className='col-md-6 col-lg-6 col-6'>
                        <img src={img} alt='aimg' />
                    </div>

                <div id='setimgh' className='col-md-6 col-lg-6 col-6'>
                        <img src={img} alt='aimg' />
                    </div>
                
            </div>
    </div>
  )
}

export default Product