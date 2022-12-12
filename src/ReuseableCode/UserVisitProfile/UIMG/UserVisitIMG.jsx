import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import userCover from '../../../Component/img/MyProfile/userCover.jpg'
import userProfile from '../../../Component/img/MyProfile/userProfile.jpg'
import '../../../Component/AdminProfile/RightSide/Block/Block.css'

const Block = (props) => {
  const {UserIMG} = props;
  // console.log('img', UserIMG);
  const [ProGetApi, setProGetApi] = useState([])
  const [UserOther, setUserOther] = useState()
  useEffect(()=>{
    ProfileGet();
    setUserOther(UserIMG)
  },[])

  const [UserId, setUserId] = useState();
    
  let location = useLocation();
  useEffect(()=>{
    setUserId(location.state.id)
    // VisitProfileOther()
  }, [UserId])

  // console.log('id n', UserId);
  


   //  user local data & token
   let authToken = localStorage.getItem("token");
   let authUser = localStorage.getItem("user");
   authToken = JSON.parse(authToken);
   authUser = JSON.parse(authUser);
   let id = authUser.data.id;
  //  console.log('user', authUser.data.id);

   //Profile Get Api Integrate
   const ProfileGet = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(`https://api.bondbeam.com/api/user_profile/${UserId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let data = await result.json();
    data = data.data;
    console.log('img', data);
    setProGetApi(data);
  };
  // console.log('img',ProGetApi);


  return (
    <div className='row' id='setmainworker'>
        <div className='col-md-4'>
            <div className='col-md-12 setpro' id='setworker'>
              {/* <span>Profile Update</span> */}
               {ProGetApi.profile_pic ? <img src={ProGetApi.profile_pic} alt="woker1" id='profileimg' /> : <img src={userProfile} alt="profile" id='profileimg' />} 
            </div>
        </div>
        <div className='col-md-8'>
        <div className='col-md-12 setprofile' id='setworker'>
          {ProGetApi.cover_pic ? <img src={ProGetApi.cover_pic} alt="Cover Image" /> : <img src={userCover} alt="Cover Image" /> }
            
            </div>
        </div>
    </div>
  )
}

export default Block