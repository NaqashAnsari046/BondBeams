import React, {useState, useEffect} from "react";
import IMGBlock from "./IMGBlock";

const MainBlockNow = () => {
  const [Followers, setFollowers] = useState([]);
  const [Folling, setFolling] = useState([]);

  useEffect(() => {
    followers();
    following()
  }, []);


  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  let id = authUser.data.id;

  // Profile Get Api Integrate
  const followers = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(`https://api.bondbeam.com/api/user_followers/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let data = await result.json();
    data = data.results;
    setFollowers(data);
    // console.log('follower',data[0].follower_user.username);
  };


    // Profile Get Api Integrate
    const following = async () => {
      let token = "Bearer " + authToken;
      const result = await fetch(`https://api.bondbeam.com/api/user_following/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      let data = await result.json();
      data = data.results;
      // console.log('following', data[0].following_user.username);
    // console.log('following 111', data.following_user);
      setFolling(data);
      // console.log('following', data); 
    };

  

  // console.log('loop',Followers);

  return (
    <div>
      {/* <IMGBlock title='Followers' follower={Followers} /> */}
      {Followers.length > 0 && <IMGBlock title='Followers' follower={Followers} />}
      {Folling.length > 0 && <IMGBlock title='Followings' follower={Folling} />}
    </div>
  );
};

export default MainBlockNow;
