import React, { useState, useEffect } from "react";
// import img from "../../../img/MyProfile/work1.png";
// import data from "./Gallary";
import "../../../Component/AdminProfile/LeftSide/Album/Album.css";
import UVGallary from "./UVGallary";
import SimpleReactLightBox from "@bimbeo160/simple-react-lightbox";
import { NavLink } from "react-router-dom";

const UVisitAlbum = (props) => {
  const { follower } = props;
//   console.log("props", follower);
  const [Followers, setFollowers] = useState([]);

  useEffect(() => {
    setFollowers(follower);
  }, []);
//   console.log("props", Followers);
  
  const ImgGallary = () =>{
    let scroll = document.getElementById('setAllbumNow');
    scroll.style.overflow='block';
  }

  return (
    <div id="setAllbumNow">
      <h1>Albums</h1>
        <div id="mainAlbum">
      <SimpleReactLightBox>
        <UVGallary />
      </SimpleReactLightBox>
    </div>
    {/* <div id="AlbumBtn" onClick={ImgGallary}><NavLink style={{textDecoration:'none', color:"black"}}>All See</NavLink></div> */}
    </div>
  );
};

export default UVisitAlbum;
