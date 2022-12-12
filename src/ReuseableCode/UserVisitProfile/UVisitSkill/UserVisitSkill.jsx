import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams, useLocation } from "react-router-dom";
import ExpText from "../../../Component/AdminProfile/RightSide/Experience/ExpText";
import img from '../../../Component/img/MyProfile/work2.jfif'
// import './Exp.css'
import '../../../Component/AdminProfile/RightSide/Experience/Exp.css'

const UserVistSkill = (props) => {

    const [Final, setfinal] = useState([]);
    const [UserId, setUserId] = useState();
    
    let location = useLocation();
    useEffect(()=>{
      setUserId(location.state.id)
      VisitProfileOther()
    }, [UserId])
    
    //  user local data & token
    let authToken = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    authToken = JSON.parse(authToken);
    let userData = JSON.parse(user);
    
    const VisitProfileOther = async() =>{
      let token = "Bearer " + authToken;
      const UserExp = await fetch(`https://api.bondbeam.com/api/user_skill/?profile_id=${UserId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      let userExp = await UserExp.json();
      let DataExp = userExp.data
      setfinal(DataExp)
      } 




  return (
    <div className="row" id="setFlowVisit">
      {Final.map((item, ind) => {
        return (
          <div key={ind} className="col-md-12 col-lg-6 col-xl-6 col-12" >
            <div className="setmainemp setmainemp11 border-bottom">
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
                <span className="pr-2"></span>
                <span>
                 
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

export default UserVistSkill;
