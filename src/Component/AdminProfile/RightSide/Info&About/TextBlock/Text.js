import React, { useEffect,useState } from 'react';
import './Text.css';
import TextHead from './TextHead';
import InfoPop from '../TextBlock/InfoPop/InfoPop'

const Text = ({InfoUpDate}) => {
  // const {work,study,address,status} = props;
  let [StateN, setStateN] = useState()
  const [UserProfileData, setUserProfileData] = useState({})


  useEffect(()=>{
    ProfileGet();
  }, [StateN])


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
 



  return (
    <div id='setmaintext'>
      <TextHead title={'info'}  icon={<InfoPop InfoUpDate={(a)=>setStateN(a)} Prefill={UserProfileData} ProfileGet={ProfileGet} />}  />
      <ul id='setlitext'>

        <h6><i className="fa-solid fa-briefcase"></i><li> web  debeloper at <span>{UserProfileData.work_place}</span></li></h6>
        <h6><i className="fa-sharp fa-solid fa-graduation-cap"></i><li> studied at <span>{UserProfileData.study_at}</span></li></h6>
        <h6><i className="fa-solid fa-location-dot"></i><li> lives in <span>{UserProfileData.address}</span></li></h6>
        <li><i className="fa-solid fa-heart"></i>{UserProfileData.relationship}</li>
      </ul>
    </div>
  )
}

export default Text