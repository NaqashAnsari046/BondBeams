import React, { useState, useEffect } from 'react';
import './Post.css';
import PostBody from './PostBody';
import img from '../../../img/MyProfile/worker1.webp'


const Post = () => {

    const [NewFeedGetApi, setNewFeedGetApi] = useState([]);

    useEffect(() => {
      ProfileGet();
    }, []);
  
    //  user local data & token
    let authToken = localStorage.getItem("token");
    authToken = JSON.parse(authToken);
  
    // Profile Get Api Integrate
    const ProfileGet = async (props) => {
  
      let token = "Bearer " + authToken;
      const result = await fetch(
        `http://192.168.100.63:9000/newsfeed/list_newsfeed/`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      let data = await result.json();
      data = data.data;
      console.log("data", data);
      setNewFeedGetApi(data);
    };
  
    console.log("new feed", NewFeedGetApi);

    return (
        <div className='mainPost'>
            <div className='col-md-12 col-lg-12 col-12'>
                <div className='row' id='setAdminProfile'>
                    <div className='col-md-1 col-lg-1 col-2' id='setPagePost'>
                        <img src={img} alt='bottom' />
                    </div>
                    <div className='col-md-11 col-lg-11 col-10' id='setTextPost'>
                        <h1>{NewFeedGetApi.username}</h1>
                        <h3>User Date741</h3>
                    </div>
                </div>
                <PostBody />


            </div>
        </div>
    )
}

export default Post