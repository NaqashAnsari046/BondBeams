import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../img/MyProfile/work2.jfif";
import './Cert.css'
import { useNavigate } from "react-router-dom";

const ExpText = (props) => {
  const navigate = useNavigate()
  const { data, UpdateFun,ExpStatUp,RemoveFun } = props;

  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);
  let Cert = data.map((item) => {
    return {
      title: item.education_title,
      discription: item.discription,
      start_date: item.start_date,
      end_date: item.end_date,
      id : item.id,
      institute_name:item.institute_name
    };
  });

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
<div id='helo'>
    <div className="row">
        {Cert.map((item, ind) => {
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
  );
};

export default ExpText;
