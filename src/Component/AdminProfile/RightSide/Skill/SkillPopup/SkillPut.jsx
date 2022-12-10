import React, { useEffect, useState } from "react";
import "../../Experience/ExperiencePop/ExpPop.css";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";



function SkillPut(props) {
  const { setremove } = props;
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
  let id = authUser.data.id;


  // put api skill
  const ExpPUt = async () => {
    const {
        skill_title,
        discription,
        start_date,
        end_date,
    } = ExpPop;

 
    let token = "Bearer " + authToken;
    let data = await fetch(
      `https://api.bondbeam.com/api/user_skill/${params.id}`,
      {
        method: "PUT",
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
    if (data) {
      navigate("/mainadminprofile");
    }
  };


  //get api skill prefill
  const ProfileGet = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_skill/${id}`,
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
        data-bs-target="#exampleModal6"
        data-bs-whatever="@mdo"
      >
        <BsFillPencilFill />
      </button>


      <div
        className="modal fade"
        id="exampleModal6"
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
          <h5 className="modal-title" id="exampleModalLabel">
            Skills
          </h5>
        </div>
        <div className="modal-body">
          
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary col-12 "
            onClick={}
          >
            Post
          </button>
        </div>
      </div>
    </div> */}
    </>
  );
}

export default SkillPut;
