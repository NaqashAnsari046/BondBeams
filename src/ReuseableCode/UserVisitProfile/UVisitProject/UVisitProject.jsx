import React, {useState, useEffect} from 'react'
import '../MainVisitUser/AllUserVisitCSS.css'
import img from '../../../Component/img/FeedNew/cons4.jpg'
import '../../../Component/AdminProfile/RightSide/Project/Pro.css'
import { NavLink, useLocation } from "react-router-dom";



const UVisitProject = () => {
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
    const UserExp = await fetch(`https://api.bondbeam.com/api/user_project/?profile_id=${UserId}`,
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
    <div >
          {Final.map((item, ind) => {
            return (
              <div className="row" key={ind}>
                <div className="col-md-1 col-lg-1 col-2" id="sdassd" >
                  <img src={img} />
                </div>
                <div
                  className="col-md-11 col-lg-11 col-10"
                  id="setCertyLicence"
                >
                  <div id='textProject'>
                    <h1>
                      python at <span>{item.project_title}</span>
                    </h1>
                    <div>
                      <h1>
                      ID Associated with <span>{item.company_name}</span>
                      </h1>
                      <span id="setspanprooject">{item.start_date} - {item.end_date}</span> 
                    </div>
                  </div>
                 <div >
                   <div>
                    <NavLink
                    // onClick={() => RemoveFun(item.id)}
                  ></NavLink>
                   </div>
                  <button id='projectBtn'>Download</button>
                 </div>
                </div>
              </div>
            );
          })}
        </div>
  )
}

export default UVisitProject