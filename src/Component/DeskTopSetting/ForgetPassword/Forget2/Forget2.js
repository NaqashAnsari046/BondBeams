import React, {useState} from "react";
import { useParams } from "react-router-dom";
import "./Forget2.css";

const Cpassword = () => {
  let params = useParams();
  let urlpath = window.location
  // console.log('url',,);
  var uuid=urlpath.pathname.split("/")[2]
  var urltoken=urlpath.pathname.split("/")[3]
  console.log('param',params.id);
  const [ChangePassword, setChangePassword] = useState({
    new_password:"",
    confirm_password:''
  });


  const ChangePass = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name,value);

    setChangePassword((PreV) => {
      return {
        ...PreV,
        [name]: value,
      };
    });
  };


  //  user local data & token
  let authToken = localStorage.getItem('token');
  authToken = JSON.parse(authToken);

  const ChangePasswordSave =async(e) =>{
    e.preventDefault();
    console.log(ChangePassword);
    e.preventDefault();
    const {new_password,confirm_password} = ChangePassword;
    let token = "Bearer "+authToken
    let data = await fetch(`https://api.bondbeam.com/api/user_reset_password/${uuid}/${urltoken}/`,{
      method:"POST",
      body:JSON.stringify({new_password,confirm_password}),
      headers:{
        "Content-Type":"application/json",
      }
    });
    data = await data.json();
  }

  
  return (
    <div id="forgetpassword2">
      <div id="ForgetInner">
        <h1>Forgot password</h1>

        <div id='forget2pass'>
            <div>
            <label>New password</label>
            <input type='text' placeholder="current password" name="new_password" value={ChangePassword.new_password} onChange={ChangePass} />

            <label>Re-type password</label>
            <input type='text' placeholder="re-type" name="confirm_password" value={ChangePassword.confirm_password} onChange={ChangePass} />

            </div>

        </div>

        <button onClick={ChangePasswordSave}>save</button>
      </div>
    </div>
  );
};

export default Cpassword;
