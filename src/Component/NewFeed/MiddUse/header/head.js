import React, { useState, useEffect } from "react";
import "../header/head.css";
import img from "../../../img/FeedNew/cons4.jpg";
import userProfile from "../../../img/MyProfile/userProfile.jpg";
import { useNavigate } from "react-router-dom";
import ImgPreview from './fileupload/ImgPreview'
import PostBody from "../../../AdminProfile/RightSide/PostPage/PostBody";


export default function Head({ PostCreateUps }) {

  // const {newsUpdate} = props;
  let navigate = useNavigate();
  const [IMG, setIGM] = useState([])
  const [States, setStates] = useState(false)
 
  console.log('state', States);
  const [CreatBoolean, setCreatBoolean] = useState(false)
  const [Description, setDescription] = useState({
    description: ''
  })

  const PostNewFeedEvent = (e) => {
    const files = e.target.files;
    setIGM(files)

  };

  const PostNewFeedEventText = (e) => {

    const DescriptionText = e.target.value;
    setDescription({
      description:DescriptionText
    })

  };

   //  user local data & token
   let authToken = localStorage.getItem("token");
   let authUser = localStorage.getItem("user");
   let Profile_pic = localStorage.getItem("Profile_pic");
   let username = localStorage.getItem("username");
   authToken = JSON.parse(authToken);
   authUser = JSON.parse(authUser);
   Profile_pic = JSON.parse(Profile_pic);
   username = JSON.parse(username);
   let id = authUser.data.id;

  // const PostCreate = async (e) => {

  //   const formData = new FormData();
  //   for (let i = 0; i < IMG.length; i++) {
  //     formData.append('images', IMG[i], IMG[i].name)
  //   }

  //   formData.append('description', Description.description)
       
  //   console.log('ff', formData);

  //   let token = "Bearer " + authToken;
  //   let result = await fetch('https://api.bondbeam.com/newsfeed/user_post/', {
  //     method: 'POST',
  //     body: formData,
  //     headers: {
  //       Authorization: token,
  //     }
  //   })
  //   result = await result.json()
  //   console.log('post', result);
  //   setCreatBoolean(result);
    
  //   setIGM("")
    
  // }


  return (
    <>
    <div className="b" id="setPostHead">
      <div className="main col-md-12">
        <div className="main_inner col-12">
          <div className="header col-12">
            <div className="header_inp_pro">
              <div className="header_profile">
               {/* {Profile_pic ? <img src={Profile_pic} /> : <img src={userProfile} alt='hello' /> }  */}
              </div>
              <input
                type="text"
                className="header_inp"
                placeholder="what is in your mind"
                name="description"
                value={Description.description}
                onChange={PostNewFeedEventText}
              />
            </div>
            <div className="header_div col-12">
              <div className="icon_inner">
                <div className="icon_divs col-2">
                  <div id="setNowFeed">
                    {/* <label htmlFor="file-upload" className="custom-file-upload">
                      <i className="fa-solid fa-image"></i>
                    </label> */}
                    {/* <input id="file-upload" type="file" onChange={(e) => PostNewFeedEvent(e)} multiple /> */}
                   <ImgPreview PostCreateUp={(a)=>setStates(a)} />
                  </div>
                  <div>
                    {/* <i className="fa-solid fa-paper-plane" id="sendBTNPOSt" onClick={PostCreate} ></i> */}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <PostBody PostUpdatea={States}  />
    </>
    
  );
}
