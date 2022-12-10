import React, {useState, useEffect} from "react";
import img from "../../../img/MyProfile/userProfile.jpg";
import "./Recent.css";
import Data from "./Data";
import { NavLink } from "react-router-dom";

const Recent = () => {
  const [Recently, setRecently] = useState([]);
  const [FollowAndUnFollow, setFollowAndUnFollow] = useState(null);
  const [Follows, setFollows] = useState([]); 

  useEffect(() => {
    ArrivedGet();
  }, []);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authId = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
 let  authIds = JSON.parse(authId);
 let Idd = authIds.data.id
//  console.log('auth', authIds.data.id );

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
  const Follow =async (id,e) =>{
    if(e.target.innerText=="Follow"){
      e.target.innerText="Un Follow"
      let token = "Bearer " + authToken;
      const result = await fetch(
        `https://api.bondbeam.com/api/user_follow_unfollow/`,{
          method: "POST",
          body: JSON.stringify({"following_user":id}),
          headers: {
            Authorization: token,
            "Content-Type": "application/json; charset=UTF-8" 
          },
        }
      );
      let FinalResult = await result.json();
      setFollows(FinalResult.results);
      if(FinalResult.status == id){
        setFollowAndUnFollow(true) 
      }
    }
    else if(e.target.innerText=="Un Follow"){
      e.target.innerText="Follow"

      let token = "Bearer " + authToken;
      const result = await fetch(
        `https://api.bondbeam.com/api/user_follow_unfollow/`,{
          method: "PUT",
          body: JSON.stringify({"following_user":id}),
          headers: {
            Authorization: token,
            "Content-Type": "application/json; charset=UTF-8" 
          },
        }
      );
      let FinalResult = await result.json();
      setFollows(FinalResult.results);
      if(FinalResult){
        setFollowAndUnFollow(true) 
      }
    }
    console.log('follow', Follows);
    }
   

  // unfollow api

  const unFollow = async (id) =>{
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_follow_unfollow/`,{
        method: "POST",
        body: JSON.stringify({"following_user":id}),
        headers: {
          Authorization: token,
          "Content-Type": "application/json; charset=UTF-8" 
        },
      }
    );
    let FinalResult = await result.json();
    setFollows(FinalResult.results);
    console.log('recently following', Follows);
    if(FinalResult){
      setFollowAndUnFollow(true) 
    }
  }



  return (
    <div id="TopResendtly1">
      <div className="container-fluid" id="setFeedRighjt">
        <h1>Recently arrived</h1>
        <div className="row" id="TopResendtly">
          {Recently.length > 0 && (
            <>
              {Recently.map((item, index) => {
                
                return (
                  Idd!==item.id?
                  <div
  
                  key={index}
                    className="col-md-6 col-lg-6 col-6 setToSearchFed"
                    id="setToSearchFed"
                  >
                    <div className="col-md-12 col-lg-12 ">
                    {item.profile_pic ? <img src={item.profile_pic} alt="Recently" /> : <img src={img} alt="Recently" /> } 
                    <h2>{item.title}</h2>
                    <h4>{item.username}</h4>
                    {/* {FollowAndUnFollow ? <button onClick={()=>Follow(item.id)}>Follow</button> : <button onClick={()=>unFollow(item.id)}>unFollow</button>} */}
                    
                    <button onClick={(e)=>Follow(item.id,e)}>Follow</button>
                    {/* <button onClick={()=>unFollow(item.id)}>unFollow</button> */}
                    
                    </div>
                  </div>
                  :""
                );
              })}
            </>
          )}
        </div>
        <NavLink id="RecentlyScroll" onClick={RecentlRoll}>
          See All +
        </NavLink>
        <NavLink id="RecentlyScroll1" onClick={RecentlRoll1}>
          See All +
        </NavLink>
      </div>
    </div>


    // <h1>hjgjkh</h1>
  );
};

export default Recent;
