import React, { useState, useEffect } from "react";
import "./Post.css";
import img from "../../../img/MyProfile/worker1.webp";
import PostHeadFeedNew from "../../../NewFeed/MiddUse/PostCenter/PostHeadFeedNew";

const PostBody = (props) => {
  const [NewFeedGetApi, setNewFeedGetApi] = useState([]);
  useEffect(() => {
    ProfileGet();
    // monthNemo()
  }, []);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);

  // Profile Get Api Integrate
  const ProfileGet = async (props) => {
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
   console.log('data', FinalResult.data);
  setNewFeedGetApi(FinalResult.data);
  };






  // const [CurDate, setDate] = useState("NA");
  // const monthNemo = (mydate) => {
  //   mydate = mydate.replace("-", ",");
  //   mydate = new Date(mydate);
  //   return mydate.toLocaleString("en-us", {
  //     year: "numeric",
  //     day: "numeric",
  //     month: "short",
  //   });
  // };
  // console.log(monthNemo(CurDate))
  // setDate(NewFeedGetApi.updated_at)
  // console.log(CurDate);





  return (
  <>
  
      {NewFeedGetApi.map((item, ind) => {
        return (
          <div id="setAdmintPost" key={ind}>
            <div className="row PostHead">
              <div className="col-md-11 col-lg-11 col-11" id="setHeadFeed">
                <img src={item.user.user_pic} alt="Post Feed New" />
                <div id="setTextFeed">
                  <h4>{item.user.username}</h4>
                  <span>{item.updated_at}</span>
                </div>
              </div>
              <div className="col-md-1 col-lg-1 col-1" id="setIconFeed">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>

            <p>
              {item.description}
              <i className="fa-light fa-ellipsis"></i>
            </p>
            <div className="bodyimg">
              <img src={img} alt="body Img" />
            </div>

              <div className="row imgBar">
                <div className="col-md-3 col-lg-3 col-3">
                  <i className="fa-solid fa-heart"></i>
                  <span>likes</span>
                </div>
                <div className="col-md-6 col-lg-4 col-3">
                  <i className="fa-solid fa-message"></i>
                  <span>comments</span>
                </div>
                <div className="col-md-3 col-lg-3 col-3">
                  <i className="fa-solid fa-share"></i>
                  <span>share</span>
                </div>
              </div>

          </div>
        );
      })}
   
  </>



  );
};

export default PostBody;
