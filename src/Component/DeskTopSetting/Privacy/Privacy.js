import React, { useEffect, useState } from "react";
import "./Privacy.css";
import Status from "./Status";
import Message from './Message'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Privacy = () => {
  const [Privacy, setPrivacy] = useState({
    see_status: '',
    message_me: "",
    see_followers: '',
    see_birthdate: '',
    see_profile: ''
  });

  useEffect(() => {
    ProfileGet();
  }, [])


  const PrivacyEvent = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setPrivacy((PreV) => {
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
  const PrivacySave = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const { see_status, message_me, see_followers, see_birthdate, see_profile } = Privacy;
    let token = "Bearer " + authToken
    let data = await fetch(`https://api.bondbeam.com/api/user_privacy/`, {
      method: "PATCH",
      body: JSON.stringify({ see_status, message_me, see_followers, see_birthdate, see_profile }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });
    data = await data.json();
    toast(data.msg)

  }



  // Profile Get Api Integrate
  const ProfileGet = async () => {
    let token = "Bearer " + authToken
    const result = await fetch(`https://api.bondbeam.com/api/user_privacy/`, {
      headers: {
        "Authorization": token
      }
    });
    let data = await result.json()
    console.log(data.data);
    data = data.data
    setPrivacy(data)
    console.log('Privacy Get Api', Privacy);
  }


  return (
    <div id="DTPrivacy">
      <div id="DTPrivacyInner">
        <h1>Privacy</h1>

        <div id='PrivacyInner'>

          <label>Status</label>
          {/* <input type='text' placeholder={Privacy.see_status} name='see_status' value={Privacy.see_status} onChange={PrivacyEvent} />
             */}

          <select name='see_status' id="selet" value={Privacy.see_status} onChange={PrivacyEvent}>
            {/* <option>{Privacy.see_status}</option> */}
            {Status.map((item, index) => {
              return <option key={index}>{item.status}</option>;
            })}
          </select>

          <label>Who can message me ?</label>
          <select id="selet" name='message_me' value={Privacy.message_me} onChange={PrivacyEvent} >
            {/* <option>{Privacy.see_status}</option> */}
            {Message.map((item, index) => {
              return <option key={index}>{item.status}</option>;
            })}
          </select>
          {/* <input type='text' placeholder={Privacy.message_me}  name='message_me' value={Privacy.message_me} onChange={PrivacyEvent}  /> */}

          <label>Who can see my followers?</label>
          <select id="selet"  name='see_followers' value={Privacy.see_followers} onChange={PrivacyEvent} >
            {/* <option>{Privacy.see_status}</option> */}
            {Message.map((item, index) => {
              return <option key={index}>{item.status}</option>;
            })}
          </select>
          {/* <input type='text' placeholder={Privacy.see_followers} name='see_followers' value={Privacy.see_followers} onChange={PrivacyEvent}  /> */}

          <label>Who can see my birthday?</label>
          <select id="selet"  name='see_birthdate' value={Privacy.see_birthdate} onChange={PrivacyEvent} >
            {/* <option>{Privacy.see_status}</option> */}
            {Message.map((item, index) => {
              return <option key={index}>{item.status}</option>;
            })}
          </select>
          {/* <input type='number' placeholder={Privacy.see_birthdate}  name='see_birthdate' value={Privacy.see_birthdate}  onChange={PrivacyEvent}  /> */}

          <label>Who can see my profile ?</label>
          <select id="selet"  name='see_profile' value={Privacy.see_profile} onChange={PrivacyEvent} >
            {/* <option>{Privacy.see_status}</option> */}
            {Message.map((item, index) => {
              return <option key={index}>{item.status}</option>;
            })}
          </select>
          {/* <input type='text' placeholder={Privacy.see_profile}  name='see_profile' value={Privacy.see_profile} onChange={PrivacyEvent}  /> */}

        </div>

        <button type="submit" onClick={PrivacySave}>save</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Privacy;
