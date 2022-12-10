import React from "react";
import GoogleLogout from 'react-google-login'

let clientId =
  "373289319911-tbqo6m6qo9t8glii7vqbhi01l4mkfmuc.apps.googleusercontent.com";

const GoogleLogouts = () => {

  const onSuccess = (res) =>{
    console.log('Login successful', res.profileObj);
  }

 


  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutsuccess={onSuccess}
      />
    </div>
  );
};

export default GoogleLogouts;
