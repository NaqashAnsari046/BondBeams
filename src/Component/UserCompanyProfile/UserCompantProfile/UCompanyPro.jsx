import React from "react";
import About from "./RightSide/UCAbout/About";
import UCompanyProfile from "./RightSide/UCcompanyProject/UCompanyProject";
import './UCompanyProfile.css'
import RecentAndCompany from "./RightSide/UCRecent&Company/RecentAndCompany";
import UComapnySimilar from "./LeftSide/UComapnySimilar";

const UCompanyPro = () => {

  return (
    <div className="container-fluid" id="MainUComponentPro">
      <div className="row">
        <div className="col-md-7 col-lg-8 col-12" id="MainRightUserCompanyProfile">
          <About />
          <UCompanyProfile />
          <RecentAndCompany />
        </div>
        <div className="col-md-5 col-lg-4 col-12" id="mainUCompanySimilar">
          <UComapnySimilar />
        </div>
      </div>
    </div>
  );
};

export default UCompanyPro;
