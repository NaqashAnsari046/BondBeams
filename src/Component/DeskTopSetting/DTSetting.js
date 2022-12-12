import React from "react";
import DeskTopProfile from "../../ReuseableCode/DeskTopSignIn/LeftSide/DeskTopProfile/DeskTopProfile";
import Cpassword from "./CPassword/Cpassword";
import "./DTSetting.css";
import ManagSession from "./ManagSession/ManagSession";
import Notify from "./Notify/Notify";
import Privacy from "./Privacy/Privacy";
import ProfileSetting from "./Profile/ProfileSetting";
import TwoFec1 from "../DeskTopSetting/TwoFectorVerification/TowFector1/TwoFec1";
import TwoFect2 from "./TwoFectorVerification/TwoFector2/TwoFect2";
import TwoFect3 from "./TwoFectorVerification/TwoFector3/TwoFect3";
import UBlock from "./UserBlock/UBlock";
import CountryCodePhone from "../../ReuseableCode/CountryCode/CountryCodePhone";
import UProVerify from "../../Component/DeskTopSetting/ProfileVeification/UProVerify";
import Skill1 from "./Skill&Exp&Pro/Skill/Skill1/Skill1";
import Skill2 from "./Skill&Exp&Pro/Skill/Skill2/Skill2";
import Forget1 from  './ForgetPassword/Forget1/Forget1';
import Forget2 from './ForgetPassword/Forget2/Forget2'
// import Reuse from "./Skill/ReuseCode/SkillReuseable";

const DTSetting = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-3 p-0">
          <div className="" id="MainDTSetting">
            <DeskTopProfile />
          </div>
        </div>
        {/* <div className="col-md-9 col-lg-9"> */}
        
          {/* <GSetting1 />  */}
          {/* <ProfileSetting /> */}
          {/* <UProVerify />     */}
          {/* <Privacy /> */}
          {/* <Notify /> */}
          {/* <Cpassword /> */}
          {/* <ManagSession /> */}
          {/* <TwoFec1 /> */}
          {/* <TwoFect2 />         */}
          {/* <TwoFect3 /> */}
          {/* <UBlock /> */}
          {/* <Skill1 /> */}
          {/* <Skill2 /> */}
          {/* <Reuse /> */}
          {/* <Forget1 /> */}
          {/* <Forget2 /> */}
          {/* <CountryCodePhone /> */}
        {/* </div> */}


      </div>
    </div>



    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-md-4 col-lg-3 col-12 p-0" >
    //       <div className="col-md-12 col-lg-12" id="MainDTSetting">
    //         <DeskTopProfile />
    //       </div>
    //     </div>
    //     <div className="col-md- col-lg-9 col-12">
    //       {/* <GSetting /> */}
    //       <Notify />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DTSetting;
