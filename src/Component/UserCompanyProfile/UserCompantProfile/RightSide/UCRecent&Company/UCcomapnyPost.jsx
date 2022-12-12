import React, {useState} from 'react';
import img from "../../../../img/MyProfile/userProfile.jpg";
import UcompanyLCS from './UcompanyLCS';
import IMGCommint from './IMGCommit';



const UCcomapnyPost = () => {
  const [GetCommintData, setGetCommintData] = useState([]);

  return (
    <div className="row" id="mainInnerUCompanyPost">
          <div className="col-md-2 col-lg-2 col-xl-2 col-3" id="UcompanyIMgPost">
            <img src={img} />
          </div>
          <div className="textUCproject col-md-10 col-lg-10 col-xl-10 col-9">
            <div id="setUserCompanyCrudPost">
              <div>
                <h3>company Name</h3>
                <h5>date</h5>
              </div>
              <div>icon</div>
            </div>

           
          </div>
          <div id='setUcompanyPost'>
            <p>sdfgdf</p>
            <img src={img} />
            <UcompanyLCS />
            <IMGCommint />
          </div>
        </div>
  )
}

export default UCcomapnyPost