import React from 'react';
import FacebookLogin from 'react-facebook-login';


const FaceBoook = () => {
  const responseFacebook = (response) => {
    console.log(response);
  }
  const componentClicked = (data) =>{
    console.log(data);
  }

  return (
    <FacebookLogin
    appId="487123623515564"
    autoLoad={false}
    size='small'
    fields="name,email,picture"
    cssClass="my-facebook-button-class"
    buttonStyle={{width:'3rem',marginRight :"1rem", fontSize:'1.8rem',height:'3rem',   overflow:'hidden',  backgroundColor:'#4267B2'}}
    icon="fa-facebook"
    onClick={componentClicked}
    callback={responseFacebook} />
  )
}

export default FaceBoook