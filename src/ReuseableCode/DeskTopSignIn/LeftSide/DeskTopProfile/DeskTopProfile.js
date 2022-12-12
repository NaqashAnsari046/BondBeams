import React from "react";
import "./DeskProfile.css";
import DeskBTN from "../DestSetting/DeskBTN";
import Small from "../DestSetting/Small";

const DeskTopProfile = (props) => {
  return (
    <div id="setBGDESk">
      <DeskBTN setDesk={props.setDesk} />
      <Small />
    </div>
  );
};

export default DeskTopProfile;
