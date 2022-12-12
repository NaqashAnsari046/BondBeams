import React, { useState, useEffect } from "react";
import img from "../../img/MyProfile/userProfile.jpg";
import "../../NewFeed/RightSide/Recent/Recent.css";
import { NavLink } from "react-router-dom";
import "../PeoplePage/PeoplePage.css";

const PeoplePage = () => {
  const [Recently, setRecently] = useState([]);
  const [FollowAndUnFollow, setFollowAndUnFollow] = useState(null);
  const [Follows, setFollows] = useState([]);

  useEffect(() => {
    ArrivedGet();
  }, []);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);

  // Profile Get Api Integrate
  const ArrivedGet = async (props) => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/recent_arrived_user`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let FinalResult = await result.json();
    setRecently(FinalResult.results);
  };

  const RecentlRoll = () => {
    let data = document.getElementById("TopResendtly");
    data.style.overflow = "scroll";
    data.style.height = "50vh";
  };

  const RecentlRoll1 = () => {
    let data = document.getElementById("TopResendtly");
    data.style.overflow = "scroll";
    data.style.height = "28.2vh";
  };

  // follow api
  const Follow = async (id) => {
    console.log("r id", id);
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_follow_unfollow/`,
      {
        method: "POST",
        body: JSON.stringify({ following_user: id }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
    let FinalResult = await result.json();
    setFollows(FinalResult.results);
    if (FinalResult.status == id) {
      setFollowAndUnFollow(true);
    }
  };
//   console.log("follow", Follows);

  // unfollow api

  const unFollow = async (id) => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_follow_unfollow/`,
      {
        method: "POST",
        body: JSON.stringify({ following_user: id }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
    let FinalResult = await result.json();
    setFollows(FinalResult.results);
    if (FinalResult) {
      setFollowAndUnFollow(true);
    }
  };

//   console.log("Recently", Recently);
  return (
    <div className="container-fluid">
      {/* <h1>Recently arrived</h1> */}
      <div className="col-md-6 col-lg-12 col-6 "
        id="setToSearchFedPeople"
      >
        {Recently.length > 0 && (
          <>
            {Recently.map((item, index) => {
              return (
                <div className="col-md-12 col-lg-12" id="setinnerPagePeople">
                  <div id="userPeoplePage">
                    {item.profile_pic ? (
                      <img src={item.profile_pic} alt="Recently" />
                    ) : (
                      <img src={img} alt="Recently" />
                    )}
                    <div id="setPageName">
                      <h2>{item.first_name}</h2>
                      <h4>{item.username}</h4>
                    </div>
                  </div>

                  {/* {FollowAndUnFollow ? <button onClick={()=>Follow(item.id)}>Follow</button> : <button onClick={()=>unFollow(item.id)}>unFollow</button>} */}

                  <button onClick={() => Follow(item.id)}>Follow</button>
                  {/* <button onClick={()=>unFollow(item.id)}>unFollow</button> */}
                </div>
              );
            })}
          </>
        )}
      </div>
      {/* <NavLink id="RecentlyScroll" onClick={RecentlRoll}>
          See All +
        </NavLink>
        <NavLink id="RecentlyScroll1" onClick={RecentlRoll1}>
          See All +
        </NavLink> */}
    </div>
  );
};

export default PeoplePage;
