import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../img/MyProfile/userProfile.jpg";
import "../UCompanyProfile.css";

const UComapnySimilar = () => {
  return (
    <div className="col-md-12 col-lg-12" id="MainsimilarUCompany">
      <div className="col-md-12 col-lg-12 setmainUCINTEr">
        <h1>Similar Companies</h1>

        <div className="row" id="innerSimilarUCompany">
          <div className="col-md-12 col-lg-2 col-2" id="similarUCompany">
            <img src={img} />
          </div>
          <div className="col-md-10 col-lg-10 col-10" id="innerUCompanyTexty">
            <h1>LA Originals Construction Site</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              rutrum egestas auctor nisl. Enim tincidunt tincidunt elementum mi
              fringilla bibendum.
            </p>

            <div className="UCTimeLoc">
              <span>Los Angeles</span>
              <span>09:00 AM - 05:00 PM</span>
            </div>

            <div className="UCTimeLoc1">
              <NavLink id="UCompanyfolow">follow</NavLink>
              <span>icon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UComapnySimilar;
