import React, {useState, useEffect} from 'react'
import img from "../../../img/FeedNew/cons4.jpg";
import ProPUT from "./ProPUT";
import { NavLink } from "react-router-dom";



const ProjectText = (props) => {
    const {RemoveFun} = props

    const [Now, setNow] = useState([]);

    useEffect(() => {
      ProfileGet();
    }, []);
  
    //  user local data & token
    let authToken = localStorage.getItem("token");
    let authUser = localStorage.getItem("user");
    authToken = JSON.parse(authToken);
    authUser = JSON.parse(authUser);
    let id = authUser.data.id;
  
    // Profile Get Api Integrate
    const ProfileGet = async () => {
      let token = "Bearer " + authToken;
      const result = await fetch(
        `https://api.bondbeam.com/api/user_project/?profile_id=${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      let data = await result.json();
      data = data.data;
      console.log('masla2', data);
      setNow(data);
      // console.log('projext', data)  ;
    };
  return (
    <div >
          {Now.map((item, ind) => {
            return (
              <div className="row" key={ind}>
                <div className="col-md-1 col-lg-1 col-2" id="sdassd">
                  <img src={img} />
                </div>
                <div
                  className="col-md-11 col-lg-11 col-10"
                  id="setCertyLicence"
                >
                  <div>
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
                    <ProPUT />
                    <NavLink
                    className="fa-solid fa-trash deleteicon"
                    onClick={() => RemoveFun(item.id)}
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

export default ProjectText