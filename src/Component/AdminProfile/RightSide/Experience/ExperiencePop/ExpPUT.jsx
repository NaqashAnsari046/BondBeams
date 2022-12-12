import React, { useEffect, useState } from "react";
import "./ExpPop.css";
import { BsFillPencilFill } from "react-icons/bs";
import Gender from "./Gender";
import { useParams } from "react-router-dom";

function ExpPUT(props) {
  const {userid} = props;
  // console.log('props Id', userid)
  let params = useParams()
  const [Now, setNow] = useState([]);
  // console.log('state Id', Now);
  // console.log('User Id', Now);



  // console.log('User inner', userida);
  const [ExpPop, setExpPop] = useState({
    experience_title: "",
    company_name: "",
    discription: "",
    job_status: "",
    start_date: "",
    end_date: "",
    company_address: "",
  });

  useEffect(()=>{
    setNow(userid)
  },[])


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
  let authUser = localStorage.getItem("user");
  authUser = JSON.parse(authUser);
  let id = authUser.data.id;
  // console.log('user', id);


  const ExpPUtBtn = async (d) => {
    const {
      experience_title,
      company_name,
      discription,
      job_status,
      start_date,
      end_date,
      company_address,
    } = ExpPop;
    console.log(experience_title,
      company_name,
      discription,
      job_status,
      start_date,
      end_date,
      company_address,);
    let token = "Bearer " + authToken;
    let data = await fetch(`https://api.bondbeam.com/api/user_experience/${Now}`, {
      method: "PUT",
      body: JSON.stringify({
        experience_title, 
        company_name,
        discription,
        job_status,
        start_date,
        end_date,
        company_address,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    data = await data.json();
  };



  // let uid = Now.map((item)=>{
  //   return item.id
  // })

  // console.log(uid);


  

  // Profile Get Api Integrate

  // const ProfileGet = async () => {
  //   let token = "Bearer " + authToken;
  //   const result = await fetch(
  //     `https://api.bondbeam.com/api/user_experience/?profile_id=${id}`,
  //     {
  //       headers: {
  //         Authorization: token,
  //       },
  //     }
  //   );
  //   let data = await result.json();
  //   data = data.data;
  //   setNow(data);
  // };





  return (
    <>
      <button
        type="button"
        className="experienceBtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal3"
        data-bs-whatever="@mdo"
      >
        <BsFillPencilFill  />
      </button>
      <div
        className="modal fade"
        id="exampleModal3"
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
                  <select
                    className="col-5"
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
                    className="col-5"
                  type='date'
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
                onClick={()=>ExpPUtBtn(Now.id)}
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

export default ExpPUT;
