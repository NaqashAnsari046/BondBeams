import React, { useState, useEffect } from "react";
import TextHead from "../Info&About/TextBlock/TextHead";
import "./Certifi.css";
import img from "../../../img/FeedNew/cons4.jpg";
import ExpText from "../Experience/ExpText";
import Data from "../Experience/ExpData";
import CertificateAdd from "./CertificateAdd/CertificateAdd";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";


const Certi = () => {
  const [Now, setNow] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    ProfileGet();
  }, []);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  let id = authUser.data.id;
  // console.log('id', id);

  // Profile Get Api Integrate
  const ProfileGet = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_license_certificate/?profile_id=${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let data = await result.json();
    data = data.data;
    setNow(data);
    console.log('certificate',data);
    // console.log('Now',Now);
  };
  
  // console.log('Certificate', Now);


   // Delete Api 
   const EduDeleteEvent = async (id) => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_skill/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    let newdata = await result.json();
    if (newdata) {
      navigate("/mainadminprofile");
    }
  };


  return (
    <div id="helo">
      <TextHead title="Licenses & Certificates"  icon={<CertificateAdd />} />
      <div className="row">
        {Now.map((item, ind) => {
          return (
            <div className="col-md-12 col-lg-6 col-12" key={ind}>
              <div className="setmainemp">
                <div className="col-md-2 col-3 col-lg-1" id="empinner">
                  <img src={img} alt="icon" />
                </div>

                <div className="col-md-10 col-9 col-lg-10 setcol11">
                   <h1>{item.designation} <i> {item.company_name}</i></h1>
                  <p>{item.discription}</p>
                  <span>{item.start_date} - {item.end_date}</span>
                  <button id="NavLinkCertity">Download</button>
                </div>
                <span id="setDeleteCon">
                  <i className="fa-solid fa-pen"></i>
                  <i className="fa-solid fa-trash" onClick={EduDeleteEvent} ></i>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // <h1>certificate</h1>
  );
};

export default Certi;
