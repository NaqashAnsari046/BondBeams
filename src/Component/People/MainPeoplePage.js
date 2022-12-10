import React from "react";
import '../NewFeed/MainNewFeed/MainFeed.css'
import './PeoplePage/PeoplePage.css'
import MainLeft from '../NewFeed/LeftSide/MainLeft'
import PeoplePage from "./PeoplePage/PeoplePage";

const MainPeoplePage = () => {


  return (
    <div className="container-fluid d-flex justify-content-center" id="MainPeople">
      <div className="row">
        <div className="col-md-1 col-lg-3" id="setcol2">
          <MainLeft /> {/* left side profile */}
        </div>
        <div className="col-md-11 col-lg-9 col-12" >
            <div className="col-md-12 col-lg-12" id="mainpeoplepage">
                <div id="innerPeoplePage">
                        <PeoplePage />
                </div>
            </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MainPeoplePage;
