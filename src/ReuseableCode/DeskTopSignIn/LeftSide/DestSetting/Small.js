import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./DeskBTN.css";

const DeskBTN = (props) => {
  let Profile_pic = localStorage.getItem("Profile_pic");
  Profile_pic = JSON.parse(Profile_pic);



  return (
    <div id="DestBTNN" className="SmallBTN" >
      <div id="setconas" className="SetSmallSetting setconasmall">
          <h1>Settings</h1>
          <img src={Profile_pic} alt="DeskProfile" />
        <NavLink id="DestProfileLink" to="/general">
          <i className="fa-solid fa-gear"></i>
          <div id="setarrow">
            <span>General</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>
        <NavLink id="DestProfileLink" to="/notification">
          <i className="fa-solid fa-bell"></i>
          <div id="setarrow">
            <span>Notification Settings</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>

        <NavLink id="DestProfileLink" to="/profile">
          <i className="fa-solid fa-user"></i>
          <div id="setarrow">
            <span>Profile Settings</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>

        <NavLink id="DestProfileLink" to="/verification">
        <i className ="fa-solid fa-certificate"></i>
          <div id="setarrow">
            <span>Profile Verfication</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>

        <NavLink id="DestProfileLink" to="/privacy">
        <i className ="fa-solid fa-award"></i>
          <div id="setarrow">
            <span>Privacy</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>
        <NavLink id="DestProfileLink" to="/password">
        <i className ="fa-solid fa-lock"></i>
          <div id="setarrow">
            <span>Password</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>

        <NavLink id="DestProfileLink" to="/sessions">
        <i className ="fa-solid fa-clock-rotate-left"></i>
          <div id="setarrow">
            <span>Manage Sessions</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>

        <NavLink id="DestProfileLink" to="/skillsmall">
          <i className="fa-sharp fa-solid fa-briefcase"></i>
          <div id="setarrow">
            <span>Manage Skill</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>
        <NavLink id="DestProfileLink" to="/visibility">
          <i className="fa-solid fa-people-group"></i>
          <div id="setarrow">
            <span>Manage Experience</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>

        <NavLink id="DestProfileLink" to="/communication">
          <i className="fa-solid fa-building"></i>
          <div id="setarrow">
            <span>Manage Projects</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>

        <NavLink id="DestProfileLink" to="/Authentication">
          <i className="fa-solid fa-building"></i>
          <div id="setarrow">
            <span>Two-factor Authentication</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>

        <NavLink id="DestProfileLink" to="/userblocks">
          <i className="fa-sharp fa-solid fa-briefcase"></i>
          <div id="setarrow">
            <span>Blocked Users</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>
        <NavLink id="DestProfileLink" to="/deleteaccount">
          <i className="fa-solid fa-people-group"></i>
          <div id="setarrow">
            <span>Delete Account</span>
            {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
          </div>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default DeskBTN;
