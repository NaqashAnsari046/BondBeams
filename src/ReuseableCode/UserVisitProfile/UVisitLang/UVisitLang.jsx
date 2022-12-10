import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams, useLocation } from "react-router-dom";
import ExpText from "../../../Component/AdminProfile/RightSide/Experience/ExpText";
import img from '../../../Component/img/MyProfile/work2.jfif'
import '../MainVisitUser/AllUserVisitCSS.css'

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
      const UserExp = await fetch(`https://api.bondbeam.com/api/user_language/?profile_id=${UserId}`,
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
    <div className="row visitEdu" >
    {Final.map((item,ind) => {
        return (
          <div className="col-md-3 col-lg-2" id="visitLangs">
            <p key={ind}>{item.language}</p>
           </div>
            );
          })}
  </div>
  );
};

export default UserVistSkill;
