import React from "react";
import Recent from "./Recent/Recent";
import Stock from "./Stock/Stock";
import TopSearch from "./TopSearch/TopS";
import "./Stock/Stock.css";
const MainFeed = () => {
  return (
    <div  className="setMainFeed">
      <div id="MainFeed">
      <h1>notification</h1>
      <Stock />
      <h3>See All +</h3>
      <TopSearch />
      <Recent />
      </div>
      
    </div>
  );
};

export default MainFeed;
