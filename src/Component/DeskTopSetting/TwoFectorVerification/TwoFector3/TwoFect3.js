import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./TwoFect3.css";

const TwoFect3 = () => {
  const [VerifyCode, setVerifyCode] = useState({
    otp:''
  });


  const TwoFectEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name,value);

    setVerifyCode((PreV) => {
      return {
        ...PreV,
        [name]: value,
      };
    });
  };

  //  user local data & token
  let authToken = localStorage.getItem('token');
  authToken = JSON.parse(authToken);
  


    // Patch APi
    const TowFectorCode =async(e) =>{
      e.preventDefault();
      const {otp} = VerifyCode;
      let token = "Bearer "+authToken
      let data = await fetch(`https://api.bondbeam.com/api/two_step_otp_varification/`,{
        method:"Post",
        body:JSON.stringify({otp}),
        headers:{
          "Content-Type":"application/json",
          "Authorization":token
        }
      });
      data = await data.json();
    }


  return (
    <div id="TwoFec3">
      <div id="InnerTwoFec3">
        <h1>Verify</h1>
        <p>We have sent you a 6-digit code.</p>
        <div className="row" id="InnerTwoFect2">
          <div className="col-md-6 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="">
              <label>6-Digit verification code</label>
              <input type="text" placeholder="Bond" name="otp" value={VerifyCode.otp} onChange={TwoFectEvent} />
            </div>
          </div>
          <p>Not recieved ? <NavLink>resend code!</NavLink></p>

        </div>
       

       
        <button onClick={TowFectorCode}>continue</button>
      </div>
    </div>
  );
};

export default TwoFect3;
