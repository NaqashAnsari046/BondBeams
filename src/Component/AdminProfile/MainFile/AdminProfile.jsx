import React, {useState} from 'react'
import Block from '../RightSide/Block/MobBlock'
// import Certi from '../RightSide/Certificate/Certifi'
import Exp from '../RightSide/Experience/Exp'
import Skill from '../RightSide/SkillFinal/Skill'
import Edu from '../RightSide/Education/Edu'
import Lang from '../RightSide/Languages/Lang'
import Cert from '../RightSide/Certificates/Cert'
import MainInfoAbout from '../RightSide/Info&About/MainInfoAbout'
import Pro from '../RightSide/Projects/Pro'
// import Skill from '../RightSide/Skill/Skill'
import MainBlockNow from '../LeftSide/ImgBlock/MainBlockNow';
import Album from '../LeftSide/Album/Album';
import MainGroup from '../LeftSide/Group/MainGroup';
import Product from '../LeftSide/Product/Product';
import PostBody from '../RightSide/PostPage/PostBody'
import { useEffect } from 'react'


const AdminProfile = () => {

  const [TimeLinePost, setTimeLinePost] = useState([]);
  // console.log('timeline',TimeLinePost );

  useEffect(()=>{
    GetTimeLine();
  },[])

   //  user local data & token
   let authToken = localStorage.getItem("token");
   let user = localStorage.getItem("user");
   authToken = JSON.parse(authToken);
   let userData = JSON.parse(user);

    // commint get
    const GetTimeLine = async () => {
      let token = "Bearer " + authToken;
      let getCommint = await fetch(
        `https://api.bondbeam.com/newsfeed/list_user_timeline/`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      getCommint = await getCommint.json();
      setTimeLinePost(getCommint.data)
    };
    // console.log(window.location.pathname);

  return (
    <div className='container-fluid setMain'>
            <div className='row'>
                <div className='col-md-8 col-lg-8 col-12' id='ProfileRighte'>    
                    <Block />
                    <MainInfoAbout />
                    <Exp />
                    <Edu />
                    <Skill />
                    <Lang />
                    <Cert />
                    <Pro />
                    <PostBody NewFeedGetApi={TimeLinePost} ProfileGet={GetTimeLine} />
                </div>
                <div className='col-md-4 col-lg-4'>                                     
                <MainBlockNow />
                <Album />
                <MainGroup />
                <Product />
                </div>
            </div>
          
        </div>
  )
}

export default AdminProfile