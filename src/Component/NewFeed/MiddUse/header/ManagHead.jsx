import React from "react";
import { useState } from "react";
import PostBody from "../../../AdminProfile/RightSide/PostPage/PostBody";
import ImgPreview from "./fileupload/ImgPreview";
import userProfile from '../../../img/MyProfile/userProfile.jpg'
import "./ManagHead.css";
import { useEffect } from "react";
// import Head from './head'

const ManagHead = ({ PostCreateUp, ExpVisitOne }) => {
  let [namse, setnamse] = useState([false]);
  const [LikeUpstate, setLikeUpstate] = useState();
  const [PostCreateUPNew, setPostCreateUPNew] = useState([false]);
  const [shareUpstate, setshareUpstate] = useState();
  const [DeteteUpstate,setDeteteUpstate] = useState();
  // console.log('names', namse);
  let [ExpVisit, setExpVisit] = useState();
  const [NewFeedGetApi, setNewFeedGetApi] = useState([]);


  useEffect(()=>{
    ProfileGet()
  }, [LikeUpstate,shareUpstate,DeteteUpstate,PostCreateUPNew])



  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  let Profile_pic = localStorage.getItem("Profile_pic");
  let username = localStorage.getItem("username");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  Profile_pic = JSON.parse(Profile_pic);
  username = JSON.parse(username);
  let id = authUser.data.id;


    // Profile Get Api Integrate
    
    const ProfileGet = async (props) => {
      // console.log('profile');
      let token = "Bearer " + authToken;
      const result = await fetch(
        `https://api.bondbeam.com/newsfeed/list_newsfeed/`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      let FinalResult = await result.json();
      setNewFeedGetApi(FinalResult.data);
    };



  return (
    <>
    <div className="col-md-12 mt-3" id="setHEADPOST">
      <div className="row mb-3">
        <div className="col-md-2 col-lg-2 col-xl-1 col-2">
          <div className="setIMGSetHEAD">
            {/* <img src={Profile_pic} /> */}
               {Profile_pic ? <img src={Profile_pic} /> : <img src={userProfile} alt='hello' /> } 
          </div>
        </div>
        <div className="col-md-10 col-lg-10 col-10" id="setHEADInput">
          <ImgPreview  ProfileGet={ProfileGet}  PostCreateUp={(a) => setnamse(a)} id="PostUpdateIcon" icon={<input
                type="text"
                className="setInputText"
                placeholder="what is in your mind"
                name="description"
              />
            }
          />
        </div>
      </div>

      <ImgPreview PostCreateUp={(a) => setnamse(a)} icon={<i className="fa-solid fa-image" id="setFeedIcon"></i>}/>
    </div>
      <PostBody uservisitexps={(a)=>setExpVisit(a)} icon={<i className="fa-solid fa-trash" />}  NewFeedGetApi={NewFeedGetApi} PostShareUpF={(e)=>setshareUpstate(e)} deletPOSTUpF={(e)=>setDeteteUpstate(e)} ProfileGet={ProfileGet} />
    </>
  );
};

export default ManagHead;
