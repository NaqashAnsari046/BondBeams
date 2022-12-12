import React from 'react'
import { useMemo } from 'react'
import { memo } from 'react'
import { useState, useEffect } from 'react'
// import FbImageGrid from 'react-fb-image-grid'
import picture from '../../../../img/FeedNew/cons4.jpg'

const PostGallary = () => {

    const [NewFeedGetApi, setNewFeedGetApi] = useState([]);
    const [IMGData, setIMGData] = useState([]);



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
      `https://api.bondbeam.com/newsfeed/list_newsfeed/`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let FinalResult = await result.json();
    setNewFeedGetApi(FinalResult.data);
  };

  let img = NewFeedGetApi.map((item)=>{
    return item.images;
  })


  let txt;
for(let i =0 ; i < img.length; i++) {
    txt = img[0].user;
    console.log('txt', txt);
}



//   let imgData = img.map((item)=>{
//     return item.post_image
//   })
  


  console.log('NewFeedGetApi', img );

    const images = [ 
        {url :'https://p0.pxfuel.com/preview/482/369/108/people-boy-child-children.jpg'},
        {url :'https://img.freepik.com/free-photo/portrait-asian-little-boy-eyeglasses_74855-10316.jpg?w=1380&t=st=1668459771~exp=1668460371~hmac=efe9d25d5cc7dc592ca25da258fda1ff46e63dde2ddb564a3585c8a4880b4f3a'},
        {url :'https://cdn.shopify.com/s/files/1/0643/8184/5749/products/Untitled-1_0015_Kids-allover-13_600x.png?v=1658296030'},
    ]

    let data = img.map((item)=>{
        return item.user
    })
  return (
    <div>
        {/* <FbImageGrid images={data} */}
        {/* width={70} */}
        {/* countFrom={1}  */}
        {/* /> */}
    </div>
  )
}

export default PostGallary