import React from "react";
import Profile from  './ProfileBlock/Profile';
import Status from "./Status/Status";
import './MainLest.css';

const MainLeft = () => {
  return (
    <div className="MainlestSide">
      <Profile /> {/* left side profile */}
    </div>
  );
};

export default MainLeft;
