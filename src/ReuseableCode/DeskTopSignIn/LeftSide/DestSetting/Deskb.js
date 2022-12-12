import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./DeskBTN.css";

const DeskBTN = () => {
  return (
    <>
      <NavLink id="DestProfileLink" to="general">
        <i className="fa-solid fa-gear"></i>
        <div id="setarrow">
          <span>General</span>
          {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
        </div>
      </NavLink>
      <NavLink id="DestProfileLink" to="notification">
        <i className="fa-solid fa-bell"></i>
        <div id="setarrow">
          <span>Notification Settings</span>
          {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
        </div>
      </NavLink>

      <NavLink id="DestProfileLink" to="profile">
        <i className="fa-solid fa-user"></i>
        <div id="setarrow">
          <span>Profile Settings</span>
          {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
        </div>
      </NavLink>

      <NavLink id="DestProfileLink" to="verification">
        <i className="fa-sharp fa-solid fa-badge-check"></i>
        <div id="setarrow">
          <span>Profile Verfication</span>
          {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
        </div>
      </NavLink>

      <NavLink id="DestProfileLink" to="privacy">
        <i className="fa-duotone fa-shield-cross"></i>
        <div id="setarrow">
          <span>Privacy</span>
          {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
        </div>
      </NavLink>
      <NavLink id="DestProfileLink" to="password">
        <i className="fa-sharp fa-solid fa-lock-keyhole"></i>
        <div id="setarrow">
          <span>Password</span>
          {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
        </div>
      </NavLink>

      <NavLink id="DestProfileLink" to="sessions">
        <i className="fa-sharp fa-solid fa-clock-three"></i>
        <div id="setarrow">
          <span>Manage Sessions</span>
          {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
        </div>
      </NavLink>

      <NavLink id="DestProfileLink" to="skills">
        <i className="fa-sharp fa-solid fa-briefcase"></i>
        <div id="setarrow">
          <span>Manage Skill</span>
          {/* <span><i className="fa-solid fa-caret-down"></i></span> */}
        </div>
      </NavLink>

      <Outlet />
    </>
  );
};

export default DeskBTN;
