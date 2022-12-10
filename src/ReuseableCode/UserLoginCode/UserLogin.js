import React, { useEffect, useState } from "react";
// import Country from "./Country";
// import "./GSetting.css";

const UserLogin = () => {
  const [GData, setGData] = useState({});
  
  useEffect(() => {
    DataLocalSorage()
  },[]);

const DataLocalSorage = () => {
    let auth = localStorage.getItem("user");
    auth = JSON.parse(auth);
    let data = auth.data;
    setGData(data);
  }

};

export default UserLogin;
// export {DataLocalSorage}
