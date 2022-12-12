import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import img from "../../../img/MyProfile/work2.jfif";
import './Exp.css'
// import { UserContext } from "./Exp";

const ExpText = (props) => {
  // const context = useContext(UserContext);
  // console.log(context);
  const { data, setremove, UpdateFun,ExpStatUp,RemoveFun, ProfileGet } = props;
  // const [Now, setNow] = useState([]);

 

  let params = useParams();
  let navigate = useNavigate();
  // const [Final, setFinal] = useState([]);
  // useEffect(() => {
  //   setFinal(data);
  // }, [ExpStatUp]);
  
  //  user local data & token
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);



 let Exp = data.map((item) => {
    return {
      title: item.experience_title,
      discription: item.discription,
      start_date: item.start_date,
      end_date: item.end_date,
      id : item.id,
      job_status : item.job_status,
      company_name:item.company_name
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
