import React, { useState } from "react";
import "./EduPop.css";
import { BiMessageAdd } from "react-icons/bi";



function ExpPOST({ProfileGet}) {
  const [ExpUp1, setExpUP1] = useState([])
  const [ExpPop, setExpPop] = useState({
    experience_title: '',
    company_name: "",
    discription: "",
    job_status:'',
    start_date:'',
    end_date:'',
    company_address:''
  });
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
    setExpUP1(data)
    ProfileGet()
    if(data.status == true || data.success == true){
      setExpUP1(data.success)
    }
  };

  return (
    <>
      <button
        type="button"
        className="experienceBtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
        data-bs-whatever="@mdo"
      >
        <BiMessageAdd />
      </button>
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
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
                   <select
                   className="col-5 jobtitleExp"
                    name="job_status"
                    id="selet"
                    value={ExpPop.job_status}
                    onChange={ExperianceEvent}
                  >
                    <option>{ExpPop.job_status}</option>
                    {Gender.map((item, index) => {
                      return <option key={index}>{item.lab}</option>;
                    })}
                  </select>
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
                data-bs-dismiss="modal"
                aria-label="Close"
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

export default ExpPOST;
