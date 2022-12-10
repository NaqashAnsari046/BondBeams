import React, { useState, useEffect } from "react";
import "./MainFeed.css";
import Profile from "../LeftSide/ProfileBlock/Profile";
import Status from "../LeftSide/Status/Status";
import PostFeedCenter from "../MiddUse/PostCenter/PostFeedCenter";
import Stock from "../RightSide/Stock/Stock";
import TopSearch from "../RightSide/TopSearch/TopS";
import Recent from "../RightSide/Recent/Recent";
import MainFeed from "../RightSide/MainFeed";
import MainLeft from "../LeftSide/MainLeft";
import Head from "../MiddUse/header/head";
import PostBody from "../../AdminProfile/RightSide/PostPage/PostBody";
import ManagHead from "../MiddUse/header/ManagHead";

const MainFeedBack = ({PostCreateUps,ExpVisitApp}) => {
  let [namea, setnames] = useState();
  // let [ExpVisitOnee, setExpVisitOnee] = useState();
  // console.log('ExpVisitOnee', ExpVisitOnee);
  // ExpVisitApp(ExpVisitOnee)


  return (
    <div className="container-fluid d-flex justify-content-center">
      {/* <div className='col-md-12 col-lg-8 bg-danger'> */}
      <div className="row" id="NewFeed">
        <div className="col-md-1 col-lg-3" id="setcol2">
          <MainLeft /> {/* left side profile */}
        </div>
        <div className="col-md-7 col-lg-5" id="setColmoini">
          {/* {setnames.length > 0 &&  <Head  PostCreateUps={(data)=>setnames(data)} />} */}
        {/* {namea.length > 0 && <PostBody getapi={namea} /> } */}
        <ManagHead />
        {/* <Head /> */}
        {/* <PostBody getapi={namea} /> */}
        </div>

        <div className="col-md-4 col-lg-3" id="setRideTedt">
          <MainFeed /> {/*right side notification bar*/}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MainFeedBack;
