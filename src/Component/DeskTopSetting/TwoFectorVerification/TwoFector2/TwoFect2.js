import React, {useEffect, useState} from "react";
import "./TwoFect2.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const TwoFect2 = () => {
  const navigate = useNavigate()
  const [TwoFactorVerify, setTwoFactorVerify] = useState({
    factor_phone_code:'',
    factor_phone_no:"",
    password:''
  });

  const TwoFectEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setTwoFactorVerify((PreV) => {
      return {
        ...PreV,
        [name]: value,
      };
    });
  };

  useEffect(()=>{
    TwoFecGETAPI();
  },[])


  //  user local data & token
  let authToken = localStorage.getItem('token');
  authToken = JSON.parse(authToken);



  // Patch APi
  const TowFector =async(e) =>{
    e.preventDefault();
    const {factor_phone_code,factor_phone_no,password} = TwoFactorVerify;
    let token = "Bearer "+authToken
    let data = await fetch(`https://api.bondbeam.com/api/two_fector_auth/`,{
      method:"PATCH",
      body:JSON.stringify({factor_phone_code,factor_phone_no,password}),
      headers:{
        "Content-Type":"application/json",
        "Authorization":token
      }
    });
    data = await data.json();
    toast(data.msg)
  }

  // Profile Get Api Integrate
  const TwoFecGETAPI = async() =>{
    let token = "Bearer "+authToken
    const result = await fetch(`https://api.bondbeam.com/api/two_fector_auth/`,{
      headers:{
        "Authorization":token
      }
    });
    let data = await result.json()
    console.log(data.data);
    data = data.data
    setTwoFactorVerify(data)
    if(data.status== true){
      navigate('/entercode')
    }
  }


  return (
    <div id="TwoFec2">
      <div id="InnerTwoFec2">
        <h1>Two-factor authentication</h1>
        <div className="row" id="InnerTwoFect2">
          <div className="col-md-12 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="setauthVerify">
              <label>Country</label>
              <input type="text" placeholder={TwoFactorVerify.phone_code} name="factor_phone_code" value={TwoFactorVerify.factor_phone_code} onChange={TwoFectEvent} />
            </div>
          </div>

          <div className="col-md-12 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="setauthVerify">
              <label>Phone number</label>
              <input type="text" placeholder={TwoFactorVerify.phone_no} name="factor_phone_no" value={TwoFactorVerify.factor_phone_no} onChange={TwoFectEvent} />
            </div>
          </div>

          <div className="col-md-12 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="setauthVerify">
              <label>Password</label>
              <input type="text" placeholder="password" name="password" value={TwoFactorVerify.password} onChange={TwoFectEvent} />
            </div>
          </div>


        </div>
       

       
        <button  id="TwoFectBTN" onClick={TowFector} >send code</button>
        {/* <NavLink to='/settings/entercode/1'   onClick={TowFector}> Send code</NavLink> */}
        {/* <NavLink className='mt-4'   to='/settings/entercode/1'>Send Code</NavLink> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default TwoFect2;
