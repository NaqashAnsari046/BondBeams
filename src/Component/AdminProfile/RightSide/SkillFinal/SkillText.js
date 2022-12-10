import React from "react";
import { NavLink} from "react-router-dom";
import img from "../../../img/MyProfile/work2.jfif";
import './Skill.css'

const ExpText = (props) => {
  const { data, setremove, UpdateFun,ExpStatUp,RemoveFun, ProfileGet } = props;
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);



 let Skill = data.map((item) => {
    return {
      id:item.id,
      title: item.skill_title,
      discription: item.discription,
      start_date: item.start_date,
      end_date: item.end_date,
    };
  });

  return (

    <div className="row">
      {Skill.map((item, ind) => {
        return (
          <div className="col-md-12 col-lg-6 col-12" key={ind}>
            <div className="setmainemp border-bottom">
              <div className="col-md-2 col-3 col-lg-1" id="empinner">
                <img src={img} alt="icon" />
              </div>

              <div className="col-md-9 col-9 col-lg-11 setcol10">
                <div>
                <h1>{item.title}</h1>
                <span>
                  {item.start_date} - {item.end_date}
                </span>
                <p>
                  {item.discription}
                </p>
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
