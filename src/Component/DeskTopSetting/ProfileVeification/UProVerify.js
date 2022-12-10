import "./UProVerify.css";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiFolderUploadFill } from "react-icons/ri";

const UProVerify = () => {
  const [IGM, setIGM] = useState([]);
  const [IGMPre, setIGMPre] = useState();
  const [reason, setreason] = useState();
  const [UVerifyPatchApi, setUVerifyPatchApi] = useState({
    name: "",
    id_card: "",
    id_card_approve_reason: "",
    other_id_image: "",
    is_verified: "Requested",
  });
  const [UVerifyGetAPI, setUVerifyGetAPI] = useState("");
 
  // useEffect(() => {
  //   ProfileGet();
  // }, []);

  const PostNewFeedEvent = (e) => {
    e.preventDefault();
    const files = e.target.files[0];
    setIGM(files);
  };

  const PostNewFeedEvents = (e) => {
    e.preventDefault();
    const files = e.target.files[0];
    setIGMPre(files);
  };
  

  //  user local data & token
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);

  //  Profile  Patch Api Integrate
  const VerifyUserSave = async (e) => {
    e.preventDefault();
    const profileverify = new FormData();

    profileverify.append("id_card",IGM,IGM.name);
    profileverify.append("other_id_image",IGMPre,IGMPre.name);
    profileverify.append("id_card_approve_reason",reason);
    profileverify.append("is_verified",'Requested');
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_profile_varification/`,{
        method:"PUT",
        headers: {
          Authorization: token,
        },
        body:  profileverify,

      }
    );
    let data = await result.json();
    toast(data.msg)
    setUVerifyGetAPI(data.data);
  };



  // Profile Get Api Integrate
  // const ProfileGet = async () => {
  //   let token = "Bearer " + authToken;
  //   const result = await fetch(
  //     `https://api.bondbeam.com/api/user_profile_varification`,
  //     {
  //       headers: {
  //         Authorization: token,
  //       },
  //     }
  //   );
  //   let data = await result.json();
  //   setUVerifyGetAPI(data.data);
  // };

  const UVrifyEvent = (e) => {
      let id_card_approve_reason = e.target.value;
      setreason(id_card_approve_reason)

  };

  // const VerifyUserSave = (e) => {
  //   e.preventDefault();
  //   toast("Comming Soon...");
  // };



  return (
    <div id="UProVerify">
      <div id="ProVerify">
        <h1>Verification of the profile!</h1>
        <input
          type="text"
          placeholder="@username"
          id="setImgUser"
          name="name"
          // value={UVerifyPatchApi.name}
          onChange={UVrifyEvent}
        />

        <div className="row" id="setUPRofile">
          <div className="col-lg-7 col-md-7 col-12">
            <div className="form-floating" id="UserVerifySeting">
              <textarea
                className="form-control"
                placeholder="hello......"
                id="floatingTextarea"
                name="id_card_approve_reason"
                // value={UVerifyPatchApi.id_card_approve_reason}
                onChange={UVrifyEvent}
              ></textarea>
              <label htmlFor="floatingTextarea2">here......</label>
            </div>

            <div id="lastUsersetting">

              <div className="mb-3" id="verifiProfile">
                <label htmlFor="formFile1" className="form-label">
                  <RiFolderUploadFill />
                </label>
                <input className="form-control" type="file" id="formFile1"
                onChange={(e) => PostNewFeedEvent(e)}
                multiple
                 />
              </div>

              <div className="mb-3" id="verifiProfile">
                <label htmlFor="formFile" className="form-label">
                  <RiFolderUploadFill />
                </label>
                <input className="form-control"  id="formFile"
                 type="file"
                 onChange={(e) => PostNewFeedEvents(e)}
                 multiple />
              </div>
              

            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12" id="setVerifySeySeting">
            <h1>Instructions</h1>
            <p>
              1: Write us 60 to 80 words on “Why do you want to verify your ID”.
            </p>
            <p>2: You must attach a copy of your NIC card/ Passport. </p>
            <p>3: Upload your recent picture. </p>
          </div>
        </div>

        <button id="setUblockBTN" onClick={VerifyUserSave}>
          Submit
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UProVerify;
