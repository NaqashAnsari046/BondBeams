import React, { useState, useEffect } from "react";
import "./Skill2.css";
import img from "../../../../img/FeedNew/cons4.jpg";
import imga from '../../../../img/logo.png'
import { NavLink, useParams } from "react-router-dom";

const UBlock = (props) => {
  const {title} = props;
  const [userProjectsList, setuserProjectsList] = useState([]);


  useEffect(() => {
    userProjectsApi();
  }, [])


  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  let id = authUser.data.id;

  const userProjectsApi = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(`https://api.bondbeam.com/api/user_project/?profile_id=${id}`, {
      headers: {
        Authorization: token,
      },
    });
    let data = await result.json();
    console.log('skill', data.data);
    data = data.data;
    console.log('skill', data);
    setuserProjectsList(data);
  };

  const VeriDataSkill = () => {
  }

  return (
    <div id="skill2main">
      <div id="Skill2Inn">
        <h1>{title}</h1>
        {userProjectsList.length > 0 && (
          <div id="skill2card">
            {userProjectsList.map((item, ind) => {
              return (
                <div id="SkillCard2" key={ind}>
                  <div id="Skill2Data">
                    <img src={imga} alt="skill" />
                    <div>
                      <h3>{item.skill_title}</h3>
                      <span id="setDicription">{item.discription}</span>
                      <br />
                      <span>start to end date. </span>
                      <span id="sesdfd">
                        {item.start_date} to {item.end_date}
                      </span>
                    </div>
                  </div>
                  <div id="setSkillBtn">
                    <div className="btn-group dropstart">
                      <p type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </p>

                      <ul className="dropdown-menu" id="setSkillBTn">
                        <NavLink id="setSkillBtnNv" to='/'>Update</NavLink>
                        <NavLink id="setSkillBtnNv">delete</NavLink>
                      </ul>
                    </div>

                    <NavLink onClick={VeriDataSkill} to={`/settings/verify${item.id}`} id='setNavLinkSikll'> verify</NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* <button id="setUblockBTN">All unblock</button> */}
      </div>
    </div>
  );
};

export default UBlock;
