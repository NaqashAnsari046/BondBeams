import React, {useState} from "react";
import "./Cpassword.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Cpassword = () => {
  const [ChangePassword, setChangePassword] = useState({
    old_password:'',
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
    const {old_password,new_password,confirm_password} = ChangePassword;
    let token = "Bearer "+authToken
    let data = await fetch(`https://api.bondbeam.com/api/change_user_password/`,{
      method:"Post",
      body:JSON.stringify({old_password,new_password,confirm_password}),
      headers:{
        "Content-Type":"application/json",
        "Authorization":token
      }
    });
    data = await data.json();
    toast(data.msg)
  }

  
  return (
    <div id="CpasswordC">
      <div id="CPasswordInnerC">
        <h1>Change Password</h1>

            <div id='setPassword'>
            <label>Current password</label>
            <input type='text' placeholder="current password" name="old_password" value={ChangePassword.old_password} onChange={ChangePass} />

            <label>New password</label>
            <input type='text' placeholder="" name="new_password" value={ChangePassword.new_password} onChange={ChangePass} />

            <label>Confirm password</label>
            <input type='text' placeholder="" name="confirm_password" value={ChangePassword.confirm_password} onChange={ChangePass} />
            </div>


        <button onClick={ChangePasswordSave}>save</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cpassword;