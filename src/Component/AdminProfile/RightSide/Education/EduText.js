import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../img/MyProfile/work2.jfif";
import './Edu.css'

const ExpText = (props) => {
  const { data, UpdateFun,ExpStatUp,RemoveFun } = props;

  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);
  let Exp = data.map((item) => {
    return {
      title: item.education_title,
      discription: item.discription,
      start_date: item.start_date,
      end_date: item.end_date,
      id : item.id,
      institute_name:item.institute_name
    };
  });
  return (

    <div className="row">
      {Exp.map((item, ind) => {
        return (
          <div className="col-md-12 col-lg-6 col-12" key={ind}>
            <div className="setmainemp border-bottom">
              <div className="col-md-2 col-3 col-lg-1" id="empinner">
                <img src={img} alt="icon" />
              </div>

              <div className="col-md-9 col-9 col-lg-11 setcol10">
                <div>
                <h1>{item.title}</h1>
                <p>
                  {item.discription} {item.job_status}
                </p>
                <span>
                  {item.start_date} - {item.end_date}
                </span>
                <p>{item.company_name}</p>
                </div>


                <div id="setIconExp">
                <span className="pr-2"><UpdateFun ExpStatUp={ExpStatUp} userid={item.id} /></span>
                <span>
                  <NavLink
                    className="fa-solid fa-trash deleteicon"
                    onClick={() => RemoveFun(item.id)}
                  ></NavLink>
                </span>
              </div>
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpText;
