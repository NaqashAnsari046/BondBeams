import React, { useEffect, useState } from "react";
// import "./ExpPop.css";
// import '../../Experience/ExperiencePop/ExpPop.css'
import { BiMessageAdd } from "react-icons/bi";

function ProPUT(props) {
  const { setremove, id } = props;
  // console.log("PUT ", id);

  const [ExpPop, setExpPop] = useState({
    project_title: "",
    discription: "",
    start_date: "",
    end_date: "",
  });

  // event
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
  authToken = JSON.parse(authToken);

  const ExpPOSTBTN = async () => {
    const { 
        project_title,
        discription,
        start_date,
        end_date,} = ExpPop;
    let token = "Bearer " + authToken;
    let data = await fetch(
      `https://api.bondbeam.com/api/user_project/`,
      {
        method: "POST",
        body: JSON.stringify({ 
            project_title,
            discription,
            start_date,
            end_date,}),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    data = await data.json();
  };

  return (
    <>
      <button
        type="button"
        className="experienceBtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal8"
        data-bs-whatever="@mdo"
      >
        <BiMessageAdd />
      </button>
      <div
        className="modal fade"
        id="exampleModal8"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Project
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
                    placeholder="institute_name"
                    name="project_title"
                    value={ExpPop.project_title}
                    onChange={ExperianceEvent}
                  />
                </div>
                <div className="Experice_div mb-3">
                  <input
                  type='date'
                    className="col-6"
                    id="title"
                    placeholder="start_date"
                    name="start_date"
                    value={ExpPop.start_date}
                    onChange={ExperianceEvent}
                  />
                   <input
                  type='date'
                    className="col-5"
                    id="title"
                    placeholder="end_date"
                    name="end_date"
                    value={ExpPop.end_date}
                    onChange={ExperianceEvent}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="col-12"
                    id="discription"
                    placeholder="Description"
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
                onClick={ExpPOSTBTN}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProPUT;
