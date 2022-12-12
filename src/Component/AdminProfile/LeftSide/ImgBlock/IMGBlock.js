import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Block.css";
import IMG from '../../../img/MyProfile/userProfile.jpg';

const IMGBlock = (props) => {
  const { title, follower } = props;
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(follower);
  }, []);
  // console.log("follower", data);

  let result = data.map((item) => {
    return item.follower_user;
  });


  return (
    <div className="setmainBlock">
      <div className="container" id="Followers">
      <h1>{title}</h1>
        <div className="row" id="setMainNow">
          {props.follower.map((item, ind) => {
            return (
                <div className="col-md-6 col-lg-3 col-xl-2  col-6" id="setimgSet" key={ind}>
                  {item.user_pic ? <img src={item.user_pic} alt="img" /> : <img src={IMG} alt="img" />}
                   <p id="FollowerAndFollowing">{item.following_user.username?item.following_user.username:item.follower_user.username}</p> 
                </div>
            );
          })}
        </div>
      </div>
       <div id="AlbumBtn"><NavLink style={{textDecoration:'none', color:"black"}}>All See</NavLink></div>
    </div>
  );
};

export default IMGBlock;
