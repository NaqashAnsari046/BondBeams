import React, { useEffect, useState } from "react";
import "../../Certificate/Certifi.css";
import '../../Experience/ExperiencePop/ExpPop.css'
import { BsFillPencilFill } from "react-icons/bs";
import { BiMessageAdd } from "react-icons/bi";

import { NavLink, useParams, useNavigate } from "react-router-dom";

function CertificateAdd(props) {
  const { setremove, id } = props;
  let params = useParams();
  let navigate = useNavigate();
  const [CerificateState, setCerificateState] = useState([]);
  const [ExpPop, setExpPop] = useState({
    designation: "",
    company_name: "",
    discription:"",
    credential_id:'',
    start_date: "",
    end_date: "",
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

  const ExpPUt = async () => {
    const {
      designation,
      company_name,
      discription,
      credential_id,
      start_date,
      end_date,
      
    } = ExpPop;

    let token = "Bearer " + authToken;
        //post api
    let data = await fetch(
      `https://api.bondbeam.com/api/user_license_certificate/`,
      {
        method: "POST",
        body: JSON.stringify({
          designation,
          company_name,
          discription,
          credential_id,
          start_date,
          end_date
        }),
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
        data-bs-target="#exampleModal02"
        data-bs-whatever="@mdo"
      >
        <BiMessageAdd />
      </button>
      <div
        className="modal fade"
        id="exampleModal02"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
              Licenses & Certificates
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
              placeholder='company_name'
              name="company_name"
              value={CerificateState.company_name}
              onChange={ExperianceEvent}
            />
          </div>
            <label htmlFor="title">File upload</label>
            <input
            type='file'
              className="col-6"
              id="title"
              placeholder='designation'
              name="designation"
              value={CerificateState.designation}
              onChange={ExperianceEvent}
            />
          <div className="Experice_div mb-3">
            <input
              className="col-6"
              id="title"
              type='date'
              // placeholder={FillForm.start_date}
              name="start_date"
              value={CerificateState.start_date}
              onChange={ExperianceEvent}
            />
            <input
              className="col-5"
              id="title"
              type='date'
              // placeholder={FillForm.end_date}
              name="end_date"
              value={CerificateState.end_date}
              onChange={ExperianceEvent}
            />
          </div>
          <div className="Experice_div mb-3">
            <input
              className="col-12"
              id="title"
              placeholder='credential_id'
              name="skill_title"
              value={CerificateState.credential_id}
              onChange={ExperianceEvent}
            />
          </div>
          <div className="mb-3 border" id="setImgCerti">
          <input
            type='file'
              className="col-12 fa-solid fa-image" 
              id="title"
              placeholder='document'
              name="document"
              value={CerificateState.document}
              
            />
          </div>

          <div className="mb-3">
            <textarea
              className="col-12"
              id="discription"
              placeholder='discription'
              name="discription"
              value={CerificateState.discription}
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
    </>
    
  //   <div className="row setPutPage">
  //   <div className="modal-content col-12 col-md-8 col-lg-8" id="routePut">
  //     <div className="modal-header">
  //       <h5 className="modal-title" id="exampleModalLabel">
  //       Licenses & Certificates
  //       </h5>
  //     </div>
  //     <div className="modal-body">
        // <form>
        //   <div className="Experice_div mb-3">
        //     <input
        //       className="col-6"
        //       id="title"
        //       placeholder={FillForm.skill_title}
        //       name="skill_title"
        //       value={ExpPop.skill_title}
        //       onChange={ExperianceEvent}
        //     />
        //     <input
        //       className="col-6"
        //       id="title"
        //       placeholder={FillForm.skill_title}
        //       name="skill_title"
        //       value={ExpPop.skill_title}
        //       onChange={ExperianceEvent}
        //     />
        //   </div>
          
        //   <div className="Experice_div mb-3">
        //     <input
        //       className="col-6"
        //       id="title"
        //       placeholder={FillForm.start_date}
        //       name="start_date"
        //       value={ExpPop.start_date}
        //       onChange={ExperianceEvent}
        //     />
        //     <input
        //       className="col-5"
        //       id="title"
        //       placeholder={FillForm.end_date}
        //       name="end_date"
        //       value={ExpPop.end_date}
        //       onChange={ExperianceEvent}
        //     />
        //   </div>

        //   <div className="mb-3">
        //     <textarea
        //       className="col-12"
        //       id="discription"
        //       placeholder={FillForm.discription}
        //       name="discription"
        //       value={ExpPop.discription}
        //       onChange={ExperianceEvent}
        //     ></textarea>
        //   </div>
        // </form>
  //     </div>
  //     <div className="modal-footer">
  //       <button
  //         type="button"
  //         className="btn btn-secondary col-12 "
  //         onClick={ExpPUt}
  //       >
  //         Post
  //       </button>
  //     </div>
  //   </div>
  // </div>
  );
}

export default CertificateAdd