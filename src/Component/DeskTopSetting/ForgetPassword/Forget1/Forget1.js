import React, {useState} from "react";
import "./ForgetPass.css";
import { useNavigate } from "react-router-dom";

const TwoFect3 = () => {
  let navigate = useNavigate();
  const [VerifyCode, setVerifyCode] = useState()
  const [Forgetemail, setForgetemail] = useState();
  // const [VerifyCode, setVerifyCode] = useState({
  //   email:'',
  //   request_for:'staging'
  // });


  const TwoFectEvent = (e) => {
    e.preventDefault();
    const email = e.target.value;
    setVerifyCode(email)

    // console.log(name,value);

    // setVerifyCode((PreV) => {
    //   return {
    //     ...PreV,
    //     [name]: value,
    //   };
    // });
  };

  //  user local data & token
  let authToken = localStorage.getItem('token');
  authToken = JSON.parse(authToken);
  


    // Patch APi
    const TowFectorCode =async(e) =>{
      let formdata = new FormData()

      formdata.append('email',VerifyCode)
      formdata.append('request_for','staging')
      // console.log('email',VerifyCode);
      e.preventDefault();
      const {request_for, email} = VerifyCode;
      let token = "Bearer "+authToken
      let data = await fetch(`https://api.bondbeam.com/api/user_forgot_password/`,{
        method:"Post",
        body:formdata,
        // headers:{
        //   'Content-Type':"application/json, charset=UTF-8",
        // }
       
      });
      data = await data.json();
      console.log(data);
      setForgetemail(data.msg)
      if(data.status == true){
        navigate('/signin')
        alert(
          data.msg
        )
      }
    }


  return (
    <div id="forgetpass">
      <div id="innerForget">
        <h1>Forget password</h1>
        <div className="row" id="innerForgetPassword">
        <p>We will send you a 6 digit code on your email or phone.</p>
        {/* {Forgetemail.status == true ? Forgetemail.msg : ''} */}
          <div className="col-md-12 col-lg-12 col-12">
            <div className="col-md-12 col-lg-12" id="setLabPass">
              <label>Phone/Email Address</label>
              <input type="text" placeholder="Bond" name="email" 
              // value={VerifyCode.email} 
              onChange={TwoFectEvent} />
            </div>
          </div>

        </div>
       

       
        <button onClick={TowFectorCode}>send</button>
      </div>
    </div>
  );
};

export default TwoFect3;
