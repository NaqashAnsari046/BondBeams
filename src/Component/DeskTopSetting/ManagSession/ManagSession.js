import React, { useEffect } from "react";
import './Session.css';


const ManagSession = () => {

   useEffect(()=>{
      UserData();
   },[])
   const UserData = async() =>{
      // let data = await fetch();
      // data = await data.json();

      console.log('data');
   }


   



  return (
    <div id="sessions">
         <div  id="sessionsnner">
         <h3>Manage sessions</h3>
      <button>Logout from all sessions</button>
      <div id="innerActive">
         <h4>You're signed in to 1 session</h4>
         <span>Current Session</span>
      </div>
      <div id="details">
         <h4 className="details">Details</h4>
         <span className="span">Lahore, Punjab, Pakistan<br/>(Approximate location)</span>
         {/* <span>(Approximate location)</span> */}
         <h5 className="details">Windows on Chrome</h5>
         <span>IP Address:<br/>119.123.42.109<br/>IP Address Owner:<br/>Hsi Pool On Karachi Bras-1</span>
         {/* <span>119.123.42.109</span>
         <span>IP Address Owner:</span>
         <span>Hsi Pool On Karachi Bras-1</span> */}
      </div>
         </div>
    </div>
  );
};

export default ManagSession;
