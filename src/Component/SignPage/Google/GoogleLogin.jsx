import React from "react";
import GoogleLogin from 'react-google-login'

let clientId =
  "373289319911-tbqo6m6qo9t8glii7vqbhi01l4mkfmuc.apps.googleusercontent.com";

const GoogleLogins = () => {

  const onSuccess = (res) =>{
    console.log('Login successful', res.profileObj);
  }

  const onFailure = (res) =>{
    console.log('Login Failed', res);
  }


  return (
    <div>
      <GoogleLogin
      style={{backgroundColor:'red'}}
        clientId={clientId}
        buttonText="login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleLogins;
