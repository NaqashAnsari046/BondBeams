import { useState, useEffect } from "react"
import {useLocation} from 'react-router-dom'
import MainBlockNow from '../../../Component/AdminProfile/LeftSide/ImgBlock/MainBlockNow'
import IMGBlock from '../../../Component/AdminProfile/LeftSide/ImgBlock/IMGBlock'

const UserVisitFolwer = () => {
    const [Followers, setFollowers] = useState([]);
    const [Folling, setFolling] = useState([]);
    const [UserId, setUserId] = useState();
  
  
      //  user local data & token
    let authToken = localStorage.getItem("token");
    authToken = JSON.parse(authToken);
  
      
    let location = useLocation();
    useEffect(()=>{
      setUserId(location.state.id)
      followersGET();
      following();
    }, [UserId])
  
  
    // Profile Get Api Integrate
    const followersGET = async () => {
      let token = "Bearer " + authToken;
      const result = await fetch(`https://api.bondbeam.com/api/user_followers/${UserId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      let data = await result.json();
      data = data.results;
      setFollowers(data);
    //   console.log('follower',data);
    };
  
    // Profile Get Api Integrate
    const following = async () => {
      let token = "Bearer " + authToken;
      const result = await fetch(`https://api.bondbeam.com/api/user_following/${UserId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      let data = await result.json();
      data = data.results;
      setFolling(data);
      // console.log('following', data);
    };


  return (
    <div>
        
        {Followers.length > 0  ? <IMGBlock title='Followers' follower={Followers} /> : ''}
        {/* {Folling.length > 0 ? <IMGBlock title='Followings' follower={Folling} /> : ''} */}
    </div>
  )
}

export default UserVisitFolwer