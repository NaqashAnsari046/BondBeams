import React, { useEffect, useState } from "react";
import '../../Experience/ExperiencePop/ExpPop.css'
import { BiMessageAdd } from "react-icons/bi";

function IMGPopup(props) {
  const { setremove, id } = props;
  console.log("PUT ", id);

  const [ExpPop, setExpPop] = useState({
    experience_title: "",
    company_name: "",
    discription: "",
    job_status:'',
    start_date:'',
    end_date:'',
    company_address:''
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
    const { experience_title, company_name, discription,job_status, start_date, end_date,company_address } = ExpPop;
    let token = "Bearer " + authToken;
    let data = await fetch(
      `https://api.bondbeam.com/api/user_experience/`,
      {
        method: "POST",
        body: JSON.stringify({ experience_title, company_name, discription,job_status,start_date, end_date,company_address }),
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
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        <BiMessageAdd />
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Experience
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
                    placeholder="Job Title"
                    name="experience_title"
                    value={ExpPop.experience_title}
                    onChange={ExperianceEvent}
                  />
                  
                </div>
                <div className="mb-3 Experice_div">
                  <input
                    className="col-6 tilte_ex mr-2"
                    placeholder="Company"
                    name="company_name"
                    value={ExpPop.company_name}
                    onChange={ExperianceEvent}
                  />
                  <input
                    className="col-5 tilte_ex"
                    placeholder="company_address"
                    name="company_address"
                    value={ExpPop.company_address}
                    onChange={ExperianceEvent}
                  />
                  {/* <input className="col-6" id="title" placeholder="full time"   onChange={ExperianceEvent} /> */}
                 
                </div>
                <div className="Experice_div mb-3">
                  <input
                    className="col-6"
                    id="title"
                    placeholder="start_date"
                    name="start_date"
                    value={ExpPop.start_date}
                    onChange={ExperianceEvent}
                  />
                   <input
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

export default IMGPopup;
