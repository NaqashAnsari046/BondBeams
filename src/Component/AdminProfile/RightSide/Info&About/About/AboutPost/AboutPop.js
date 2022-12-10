import React, { useEffect, useState } from "react";
import "./Pop.css";
import { BsFillPencilFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function InfoPop({AboutFun}) {
  const [AboutState, setAboutState] = useState({
    about: "",
  });



  const ABoutPost = (e) => {
    const { name, value } = e.target;

    setAboutState((PreVal) => {
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

  const AboutSave = async (e) => {
    const { about } = AboutState;
    let token = "Bearer " + authToken;
    let data = await fetch(`https://api.bondbeam.com/api/user_profile/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ about }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    data = await data.json();
    AboutFun()

    // console.log("About Update");
  };

  return (
    <>
      <button
        type="button"
        className="SetWriteBTN"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <BsFillPencilFill />
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                About
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
                <div className="mb-3"></div>
                <div className="mb-3">
                  <textarea
                    className="col-12"
                    id="message-texts"
                    name="about"
                    value={AboutState.about}
                    onChange={ABoutPost}
                    placeholder="What is in your mind"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <NavLink
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-secondary col-12 "
                onClick={AboutSave}
              >
                Post
              </NavLink>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default InfoPop;
