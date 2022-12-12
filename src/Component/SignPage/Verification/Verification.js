import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Verication.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Verification = () => {
  let navigate = useNavigate();
  let SignUp_id = localStorage.getItem('SignUp_id');
  console.log('sign',SignUp_id);

  const [verifi, setverifi] = useState(
  );

  const cerivifi = (e) => {
    const { name, value } = e.target;
    setverifi((PreValue) => {
      return {
        ...PreValue,
        [name]: value,
      };
    });
  };

  const Cerification = async (e) => {
    e.preventDefault();
    var obj={
      id:SignUp_id,
      otp:verifi.num1
    }
    console.log('obj',obj.id);
    
    console.log('sageer',verifi );
    

    let data = await fetch(`https://api.bondbeam.com/api/verify_email/`, {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
   
    let status = data.status == true
    if(status){
      navigate('/newsfeed');
      toast('WellCome Bondbeam')
    }
    console.log(data);
  };

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  let lastInputStatus = 0;
  input.onkeyup= (e) => {
    const currentElement = e.target
    const nextelement = input.nextElementSibling
    const prevElement = input.previousElementSibling

    if(prevElement && e.keyCode === 8){
      if(lastInputStatus === 1){
        prevElement.value = ''
        prevElement.focus()
      }


    }
  }
});


  return (
    <div id="verification">
      <div id="cerificationInner">
        <h1>Security Verification</h1>
        <p>Enter the code that<br/> was sent to your<br/> mobile phone.</p>
        <h6>
          To finish registering, please enter <br/>the verification code we gave you.<br/>
          It might take a few minutes to<br/> receive your code.
        </h6>

        <div id="verifiBox">
          <input
            type="text"
            onChange={cerivifi}
            name="num1"
            // value={verifi}
          />
          
          {/* <input
            type="text"
            onChange={cerivifi}
            name="num2"
            value={verifi.num2}
          />
          <input
            type="text"
            onChange={cerivifi}
            name="num3"
            value={verifi.num3}
          />
          <input
            type="text"
            onChange={cerivifi}
            name="num4"
            value={verifi.num4}
          />
          <input
            type="text"
            onChange={cerivifi}
            name="num5"
            value={verifi.num5}
          />
          <input
            type="text"
            onChange={cerivifi}
            name="num6"
            value={verifi.num6}
          /> */}
        </div>
        <h4>
          {/* Didn’t receive the code? <NavLink>Resend Code</NavLink> */}
        </h4>
        <button type="submit" onClick={Cerification}>
          submit
        </button>
      <ToastContainer />
      </div>
    </div>
  );
};

export default Verification;
