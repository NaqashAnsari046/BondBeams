import React, { useState, useEffect, useRef } from "react";
import "./Signin.css";
import img from "../img/log.jfif";
import { NavLink,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogins from '../Google/GoogleLogin'
import FaceBoook from "../../AdvanceLogin/FaceBoook";
import GoogleLogin from "../../AdvanceLogin/GoogleLogin";


const SignIn = () => {
  let navigate = useNavigate();
  let emailRef = useRef(null)
  let passwordRef = useRef(null)
  let [error, setError] = useState(false);
  const [Reg, setReg] = useState({
        email: "",
        password: "",
      });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setReg((PreValue) => {
      return {
        ...PreValue,
        [name]: value,
      };
    });
  };

  const DataSub = async (e) => {
    emailRef.current.style.border='1px solid gainsboro';
    passwordRef.current.style.border='1px solid gainsboro';
    e.preventDefault();
    const {password, email} = Reg;

    if(!email || !password){
      setError(true);
      return false;
    }
    // let data = await fetch(`https://beambond.herokuapp.com/api/user_login/`,{
      let data = await fetch(`https://api.bondbeam.com/api/user_login/`,{
          method:"post",
          body:JSON.stringify({ password, email }),
          headers:{
            "Content-Type":"application/json"
          }
        });
        data = await data.json();
        if(data.status == false){
          toast('Please enter valid email')
        }
        console.log('sign in',data) ;
        if(data.status == true){
          localStorage.setItem("user",JSON.stringify(data))
          localStorage.setItem("username",JSON.stringify(data.data.username))
          localStorage.setItem("Profile_pic",JSON.stringify(data.data.profile_pic))
          localStorage.setItem("cover_pic",JSON.stringify(data.data.cover_pic))
          localStorage.setItem("token",JSON.stringify(data.token.access))
          navigate('/newsfeed') 
        }else{
          console.log('data not send');
        }
      };
  

  return (
    <div className="SginageSetIN">
           <div id="signFromIn">
             <img src={img} alt="logo" />
             <h2>Sign In</h2>
             <div>
              <label><h6>email</h6> <h6> {error && !Reg.email && <span id="error">field required </span>}</h6></label>
              <input
                type="text"
                ref={emailRef}
                name="email"
                value={Reg.email}
                onChange={InputEvent}
                placeholder='email'
              />
              
              <label><h6>password</h6> <h6> {error && !Reg.password && <span id="error">field required </span>}</h6></label>
              <input
                type="text"
                name="password"
                ref={passwordRef}
                value={Reg.password}
                placeholder='password'
                onChange={InputEvent}
              />
            </div>

            <NavLink className='forget' to='/forget'>forget</NavLink>
  
            <button type="submit" onClick={DataSub}>
              Submit
            </button>
            <div className="icoon">
              <FaceBoook />
              <GoogleLogin />
              {/* <i className="fa fa-facebook-square text-primary"></i> */}
              {/* <i className="fa fa-twitter text-info"></i> */}
            </div>
            <h3>
              already have an account? <NavLink to="/signup">Sign Up</NavLink>
            </h3>
          </div>
          <ToastContainer />
        </div>
  );
};

export default SignIn;






















// import React, {useEffect, useState} from "react";
// import "../SignUp/SignUp.css";
// import img from "../img/log.jfif";
// import { NavLink } from "react-router-dom";
// import { Alert } from "bootstrap";

// const SignIn = () => {
//   useEffect(() => {
//     DataSub();
//   });
//   const [Reg, setReg] = useState({
//     email: "",
//     password: "",
//   });

//   const InputEvent = (e) => {
//     const { name, value } = e.target;

//     setReg((PreValue) => {
//       return {
//         ...PreValue,
//         [name]: value,
//       };
//     });
//   };

//   const DataSub = async (e) => {
//     e.preventDefault();
//     const {password, email} = Reg;
//     console.log(email, password);

//     let data = await fetch(`https://beambond.herokuapp.com/api/user_login/`,{
//       method:"post",
//       body:JSON.stringify({password, email,}),
//       headers:{
//         "Content-Type":"application/json"
//       }
//     });
//     data = await data.json();
//     if(data){
//     console.log('data send',data);
//     }else{
//       console.log('data not send');
//     }
//   };


//   return (
//     <div className="SginageSet">
//       <div id="signFrom">
//         <img src={img} alt="logo" />
//         <h2>Sign In</h2>
//         <div>
//           <label>Email</label>
//           <input type="text" onChange={InputEvent} name='email' value={Reg.email} />

//           <label>Password</label>
//           <input type="text" onChange={InputEvent} name='password' value={Reg.password} />
//         </div>

//         <div id="forgot">
//           <NavLink>Forgot Password?</NavLink>
//         </div>
//         <button type={"submit"} onClick={DataSub} >Submit</button>
//         <div className="icon">
//           <i className="fa fa-google text-success"></i>
//           <i className="fa fa-facebook-square text-primary"></i>
//           <i className="fa fa-twitter text-info"></i>
//         </div>
//         <h3>
//           New on bondBeam? <NavLink to="/"> Sign Up</NavLink>
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
