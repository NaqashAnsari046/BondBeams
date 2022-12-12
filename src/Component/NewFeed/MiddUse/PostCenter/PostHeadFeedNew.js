import React, { useState, useEffect } from "react";
import PostBody from "../../../AdminProfile/RightSide/PostPage/PostBody";
import img from "../../../img/MyProfile/worker1.webp";
import "./PostFeedNews.css";

const PostHeadFeedNew = (props) => {
  const { NewFeedDataAPi } = props;
  const [PostHeadGetApi, setPostHeadGetApi] = useState([]);
  console.log("head 2", PostHeadGetApi);

  useEffect(() => {
    setPostHeadGetApi(NewFeedDataAPi);
  });
  return (
    <>
    
      {PostHeadGetApi.length > 0 && (
        <div>
          {PostHeadGetApi.map((item, ind) => {
            return (
              <div className="row PostHead" key={ind}>
                <div className="col-md-11 col-lg-11 col-11" id="setHeadFeed">
                  {/* <img src={img} alt="Post Feed New" /> */}
                  <div id="setTextFeed">
                    <h4>{item.user.username}</h4>
                  </div>
                </div>
                <div className="col-md-1 col-lg-1 col-1" id="setIconFeed">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* <PostBody /> */}
    </>
  );
};

export default PostHeadFeedNew;
