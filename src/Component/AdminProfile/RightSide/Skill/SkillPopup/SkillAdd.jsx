import React, { useEffect, useState } from "react";
// import "./ExpPop.css";
import '../../Experience/ExperiencePop/ExpPop.css'
import { BsFillPencilFill } from "react-icons/bs";
import { BiMessageAdd } from "react-icons/bi";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function SkillPopup(props) {
  const { setremove, id } = props;
  let params = useParams();
  let navigate = useNavigate();
  const [FillForm, setFillForm] = useState([]);
  const [ExpPop, setExpPop] = useState({
    skill_title: "",
    discription: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    // console.log("props params", params);
    ProfileGet();
  }, []);

  const ExperianceEvent = (e) => {
    const { name, value } = e.target;

    setExpPop((PreVal) => {
      return {
        ...PreVal,
        [name]: value,
      };
    });
  };

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  let Userid = authUser.data.id;

  const ExpPUt = async () => {
    const {
        skill_title,
      discription,
      start_date,
      end_date,
    } = ExpPop;

  
    let token = "Bearer " + authToken;
        //post api
    let data = await fetch(
      `https://api.bondbeam.com/api/user_skill/`,
      {
        method: "POST",
        body: JSON.stringify({
            skill_title,
          discription,
          start_date,
          end_date,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    data = await data.json();
   
  };

  const ProfileGet = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_skill/${Userid}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let data = await result.json();
    let Result = data.data;
    setFillForm(Result);
    // console.log("api", FillForm);
  };

  return (

   <>
  <button
        type="button"
        className="experienceBtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal5"
        data-bs-whatever="@mdo"
      >
        <BiMessageAdd />
  </button>


<div
        className="modal fade"
        id="exampleModal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
              Skill
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form>
          <div className="Experice_div mb-3">
            <input
              className="col-6"
              id="title"
              placeholder={FillForm.skill_title}
              name="skill_title"
              value={ExpPop.skill_title}
              onChange={ExperianceEvent}
            />
          </div>
          
          <div className="Experice_div mb-3">
            <input
              className="col-6"
              id="title"
              type='date'
              placeholder={FillForm.start_date}
              name="start_date"
              value={ExpPop.start_date}
              onChange={ExperianceEvent}
            />
            <input
            type='date'
              className="col-5"
              id="title"
              placeholder={FillForm.end_date}
              name="end_date"
              value={ExpPop.end_date}
              onChange={ExperianceEvent}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="col-12"
              id="discription"
              placeholder={FillForm.discription}
              name="discription"
              value={ExpPop.discription}
              onChange={ExperianceEvent}
            ></textarea>
          </div>
        </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary col-12 "
                onClick={ExpPUt}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    
    {/* <div className="row setPutPage">
    <div className="modal-content col-12 col-md-8 col-lg-8" id="routePut">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel5">
        Skill
        </h5>
      </div>
      <div className="modal-body">
        <form>
          <div className="Experice_div mb-3">
            <input
              className="col-6"
              id="title"
              placeholder={FillForm.skill_title}
              name="skill_title"
              value={ExpPop.skill_title}
              onChange={ExperianceEvent}
            />
          </div>
          
          <div className="Experice_div mb-3">
            <input
              className="col-6"
              id="title"
              placeholder={FillForm.start_date}
              name="start_date"
              value={ExpPop.start_date}
              onChange={ExperianceEvent}
            />
            <input
              className="col-5"
              id="title"
              placeholder={FillForm.end_date}
              name="end_date"
              value={ExpPop.end_date}
              onChange={ExperianceEvent}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="col-12"
              id="discription"
              placeholder={FillForm.discription}
              name="discription"
              value={ExpPop.discription}
              onChange={ExperianceEvent}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary col-12 "
          onClick={ExpPUt}
        >
          Post
        </button>
      </div>
    </div>
  </div> */}
   </>
  );
}

export default SkillPopup;
