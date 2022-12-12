import React from "react";
import "./UBlock.css";
import img from "../../img/FeedNew/cons4.jpg";
import Block from "./Block";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const UBlock = () => {
  const UnBlock =() =>{
    toast('Comming Soon....')
  }
  return (
    <div id="UserBlock">
      <div id="BlockU">
        <h1>You blocked users</h1>
        <div id="hhhh">
          {Block.map((item,ind) => {
            return (
              <div id="CardBlock" key={ind}>
                <div id="ineerCardBlock">
                  <img src={img} alt="User Block " />
                  <div>
                    <h3>Bond Beam User</h3>
                    <span>Engineer </span>
                  </div>
                </div>
                <div>
                  <button onClick={UnBlock}>unblock</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* <button id="setUblockBTN">All unblock</button> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default UBlock;
