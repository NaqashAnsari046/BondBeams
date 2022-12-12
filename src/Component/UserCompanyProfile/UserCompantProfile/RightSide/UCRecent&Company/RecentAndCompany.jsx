import React from "react";
// import "../UCompanyProfile.css";
import '../../UCompanyProfile.css'
import { NavLink } from "react-router-dom";
import img from "../../../../img/MyProfile/userProfile.jpg";
import UCcomapnyPost from "./UCcomapnyPost";

const RecentAndCompany = () => {
  return (
    <div className="container-fluid" id="MainUCompanyRecent">
      <div className="col-md-12 col-lg-12 col-12" id="UCompanyRecent">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="setUcompanyRecently">
              <h1>Recent Jobs Posted</h1>
              <div className="row">
                <div
                  className="col-md-6 col-lg-6 col-12"
                  id="UCcompanyRecently"
                >
                  <div className="row col-md-12 col-lg-12">
                    <div className="col-md-12 col-lg-12 col-xl-6 col-12">
                      <div className="col-md-12 col-lg-12" id="innerUCompanyRecenty">
                        <h2>Sr. Construction Head</h2>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Numquam voluptate expedita necessitatibus autem,
                        </p>
                        <div id="innerUCRecentltyspan">
                          <h6>icon Los Angeles</h6>
                          <h6>icon Los Angeles</h6>
                        </div>

                        <div id="innerUCRecentltyLink">
                          <NavLink id="UcompanyLink">Apply</NavLink>
                          <NavLink id="UcompanyLink">remove</NavLink>
                        </div>

                        <h5>Post Today</h5>
                      </div>
                    </div>
                    {/* <div className="col-md-6 col-lg-6 col-12 bg-danger">helihyk</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>


          
          <div className="col-md-12 col-lg-6 col-12">
            <div id="setUCPost">
            <UCcomapnyPost />

            </div>
          </div>





        </div>
      </div>
    </div>
  );
};

export default RecentAndCompany;
