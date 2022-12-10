import React, {useState, useEffect,useContext} from "react";
import Text from "./TextBlock/Text";
import About from './About/About';
import './About/About.css'
import {GlobalAbout} from './TextBlock/InfoPop/InfoPop'

const MainInfoAbout = () => {
  const [UserProfileData, setUserProfileData] = useState({})
  let statte  =  useContext(GlobalAbout)


  useEffect(()=>{
    ProfileGet();
  }, [statte])


   //  user local data & token
   let authToken = localStorage.getItem("token");
   let authUser = localStorage.getItem("user");
   authToken = JSON.parse(authToken);
   authUser = JSON.parse(authUser);
   let id = authUser.data.id;

   
   // Profile Get Api Integrate
   const ProfileGet = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_profile/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    let data = await result.json();
    data = data.data;
    setUserProfileData(data);
    // console.log('updates info', data);
    }

    // console.log('updatedat', UserProfileData);

    
  return (
    <div id="setMainTextInfo">
      <Text work={UserProfileData.work_place} study={UserProfileData.study_at}  address={UserProfileData.address} status= {UserProfileData.relationship} />
      <About work={UserProfileData.about}  ProfileGet={ProfileGet} />
    </div>
  );
};

export default MainInfoAbout;
