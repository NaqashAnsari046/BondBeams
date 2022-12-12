import React, { useEffect, useState } from "react";
import TextHead from "../Info&About/TextBlock/TextHead";
import "./Pro.css";
import ProAdd from "./ProAdd";
import ProjectText from "./ProjectText";
const Pro = () => {


    //  user local data & token
    let authToken = localStorage.getItem("token");
    let authUser = localStorage.getItem("user");
    authToken = JSON.parse(authToken);
    authUser = JSON.parse(authUser);
    let id = authUser.data.id;


  const ExpDeleteEvent = async (id) => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_project/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    let newdata = await result.json();
    
  };

  

  return (
   

    <div id="MainCerti">
      <TextHead title="Project" icon={<ProAdd />} />

      <div className="col-md-12" id="setMainCerit">
        <ProjectText  RemoveFun={ExpDeleteEvent} />
      </div>

      {/* <div className='col-md-12' id="setMainCerit">
      <div className="row" >
        <div className="col-md-1 col-lg-1 col-2" id="sdassd">
          <img src={img} />
        </div>
        <div className="col-md-11 col-lg-11 col-10" id="setCertyLicence">
          <div>
            <h1>
              python at <span>spacetech</span>
            </h1>
            <div>
              <h1>
                cerdential ID <span>64647767000</span>
              </h1>
              <h6>2019-2020</h6>
            </div>
          </div>
          <button>Download</button>
        </div>
      </div>
      </div> */}
    </div>
  );
};

export default Pro;
