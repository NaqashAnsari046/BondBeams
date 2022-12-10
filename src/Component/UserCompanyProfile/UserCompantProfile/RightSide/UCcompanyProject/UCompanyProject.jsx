import React from "react";
import '../../UCompanyProfile.css'
import img from "../../../../img/MyProfile/userProfile.jpg";

const UCompanyProfile = () => {
  return (
    <div className="container-fluid" id="MainUCompanyProject">
      <div className="col-md-12 col-lg-12 col-12" id="UCompanyProject">
        <h1>Project</h1>

        <div className="row" id="mainInnerUCompanyProject">
          <div className="col-md-3 col-lg-1 col-3" id="UcompanyIMg">
            <img src={img} />
          </div>
          <div className="textUCproject col-md-8 col-lg-11 col-9">
            <div id="setUserCompanyCrud">
              <div>
                <h3>Project Name</h3>
                <h4>ID Associated with Uber</h4>
                <h5>date</h5>
              </div>
              <div>icon</div>
            </div>

            <div className="row">
              <div
                className="col-md-4 col-lg-2 col-6"
                id="UcomapanyprojectGallary"
              >
                <img src={img} />
              </div>
              <div
                className="col-md-4 col-lg-2 col-6"
                id="UcomapanyprojectGallary"
              >
                <img src={img} />
              </div>
            </div>
          </div>
        </div>

        


      </div>
    </div>
  );
};

export default UCompanyProfile;
