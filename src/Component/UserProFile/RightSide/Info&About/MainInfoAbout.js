import React from "react";
import Text from "./TextBlock/Text";
import About from './About/About';
import './About/About.css'

const MainInfoAbout = () => {
  return (
    <div id="setMainTextInfo">
      <Text />
      <About />
    </div>
  );
};

export default MainInfoAbout;
