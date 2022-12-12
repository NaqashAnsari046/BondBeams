import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import work2 from "../../../img/FeedNew/cons5.avif";
import userCover from "../../../img/MyProfile/userCover.jpg";
import userProfile from "../../../img/MyProfile/userProfile.jpg";
import IMGPopup from "./ImgPopup/IMGPopUp";
import "./Block.css";
import { RiFolderUploadFill } from "react-icons/ri";
import ImgPreview from "../../../NewFeed/MiddUse/header/fileupload/ImgPreview";

const Block = (props) => {
  const { UserIMG } = props;
  const [UserCover, setUserCover] = useState();
  const [IGMPre, setIGMPre] = useState();
  const [ProGetApi, setProGetApi] = useState([]);
  const [UserOther, setUserOther] = useState();
  useEffect(() => {
    ProfileGet();
    setUserOther(UserIMG);
  }, []);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  let id = authUser.data.id;

  const ProfileGet = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_profile/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let data = await result.json();
    data = data.data;
    // console.log("img", data);
    setUserCover(data.id);
    setProGetApi(data);
  };

  //img upload

  const PostNewFeedEvents = (e) => {
    e.preventDefault();
    const files = e.target.files[0];
    setIGMPre(files);
  };

  const sendCoverIMG = async () => {
    const profileverify = new FormData();
    profileverify.append("cover_pic", IGMPre, IGMPre.name);

    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_profile/${UserCover}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
        },
        body: profileverify,
      }
    );
    let data = await result.json();
    console.log(data);
  };

  return (
    <div className="row" id="setmainworker">
      <div className="col-md-4">
        <div className="col-md-12 setpro" id="setworker">
          <div id="setUploadImgUser">
            {ProGetApi.profile_pic ? (
              <img src={ProGetApi.profile_pic} alt="woker1" id="profileimg" />
            ) : (
              <img src={userProfile} alt="profile" id="profileimg" />
            )}
            {/* <input>Profile Update</input> */}

            {/* <label htmlFor="formFile" className="form-label bg-info">
              <RiFolderUploadFill />
              <ImgPreview />
              edit Profile
              <button
                onClick={sendCoverIMG}
                style={{ backgroundColor: "red", width: "2rem" }}
              >
                Img
              </button>
            </label> */}
            {/* <input className="form-control"  id="formFile"
                 type="file"
                 onChange={(e) => PostNewFeedEvents(e)}
                 multiple /> */}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="col-md-12 setprofile" id="setworker">
          {ProGetApi.cover_pic ? (
            <img src={ProGetApi.cover_pic} alt="Cover Image" />
          ) : (
            <img src={userCover} alt="Cover Image" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Block;
