import React from "react";
import { NavLink } from "react-router-dom";
import "./TwoFec1.css";

const ProfileSetting = () => {
  return (
    <div id="TwoFec1">
      <div id="InnerTwoFec">
        <h1>Two-factor authentication</h1>

        <div id="InnerTwoFect">
          <span>
            <i class="fa-solid fa-lock"></i>
          </span>
          <p>
            Two step verification gives you additional security by requiring a
            verification code whenever you sign in on new device.
          </p>
        </div>

        <div id="InnerTwoFect">
          <span className="ml-3">
          <i class="fa-solid fa-mobile"></i>
          </span>
          <p className="ml-4">
            Your phone number or Authenticator App helps us keep your account
            secure by adding an additional layer of verification. Your phone
            number also helps others, who already have your phone number,
            discover and connect with you. You can always decide how you want
            your phone number used. Learn more
          </p>
        </div>
        <NavLink to='/settings/authentications/1' id="setcontinue1">continue</NavLink>
        <NavLink to='/Authentications/1' id="setcontinue">continue</NavLink>

      </div>
    </div>
  );
};

export default ProfileSetting;
