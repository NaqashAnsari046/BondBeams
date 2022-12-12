import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./DeskBTN.css";
import userProfile from "../../../../Component/img/MyProfile/userProfile.jpg";

const DeskBTN = (props) => {


  
  let Profile_pic = localStorage.getItem("Profile_pic");
  Profile_pic = JSON.parse(Profile_pic);

  return (
    <div id="DestBTN">
      <div id="setconas1">
        <div id="setconas">
          <h1>Settings</h1>
         {Profile_pic ?<img src={Profile_pic} alt="DeskProfile" /> : <img src={userProfile} alt="DeskProfile" />} 
          <NavLink id="DestProfileLink" to="general" activeclassname="active">
            <i className="fa-solid fa-gear"></i>
            <div id="setarrow">
              <span>General</span>
              {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>
          <NavLink id="DestProfileLink" to="notification" activeclassname="active">
            <i className="fa-solid fa-bell"></i>
            <div id="setarrow">
              <span>Notification Settings</span>
              {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>

          <NavLink id="DestProfileLink" to="profile" activeclassname="active">
            <i className="fa-solid fa-user"></i>
            <div id="setarrow">
              <span>Profile Settings</span>
              {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>

          <NavLink id="DestProfileLink" to="verification" activeclassname="active">
            <i className ="fa-solid fa-certificate"></i>
            <div id="setarrow">
              <span>Profile Verfication</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>

          <NavLink id="DestProfileLink" to="privacy" activeclassname="active">
            <i className ="fa-solid fa-award"></i>
            <div id="setarrow">
              <span>Privacy</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>
          <NavLink id="DestProfileLink" to="password" activeclassname="active">
            <i className ="fa-solid fa-lock"></i>
            <div id="setarrow">
              <span>Password</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>

          <NavLink id="DestProfileLink" to="sessions" activeclassname="active">
            <i className ="fa-solid fa-clock-rotate-left"></i>
            <div id="setarrow">
              <span>Manage Sessions</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>

          <NavLink id="DestProfileLink" to="skill" activeclassname="active">
            <i className ="fa-solid fa-graduation-cap"></i>
            <div id="setarrow">
              <span>Manage Skill</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>
          <NavLink id="DestProfileLink" to="experience" activeclassname="active">
            <i className ="fa-solid fa-microscope"></i>
            <div id="setarrow">
              <span>Manage Experience</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>

          <NavLink id="DestProfileLink" to="project" activeclassname="active">
            <i className="fa-solid fa-building"></i>
            <div id="setarrow">
              <span>Manage Projects</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>

          <NavLink id="DestProfileLink" to="authentication" activeclassname="active">
            <i className ="fa-solid fa-fingerprint"></i>
            <div id="setarrow">
              <span >Two-factor Authentication</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>

          <NavLink id="DestProfileLink" to="userblock" activeclassname="active">
            <i className ="fa-solid fa-eye-slash"></i>
            <div id="setarrow">
              <span>Blocked Users</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>
          <NavLink id="DestProfileLink" to="delete-account" activeclassname="active">
            <i className ="fa-solid fa-trash-can"></i>
            <div id="setarrow">
              <span>Delete Account</span>
              {/* <span><i className Name="fa-solid fa-caret-down"></i></span> */}
            </div>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default DeskBTN;
