import React, { useEffect, useState, useMemo } from "react";
import './GSetting.css';
import Gender from "./Gender";
import countryList from "react-select-country-list";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const G = () => {
  const [GSetUpdate, setGSetUpdate] = useState()
  const countryname = useMemo(() => countryList().getData(), []);
  const [ProGetApi, setProGetApi] = useState({
    username: "",
    email: "",
    phone_code: "",
    phone_no: "",
    birth_date: "",
    gender: "",
    country: "",
  });

  useEffect(() => {
    ProfileGet();
  }, [GSetUpdate]);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);

  const ProfilePut = (e) => {
    const { name, value } = e.target;

    setProGetApi((PreV) => {
      return {
        ...PreV,
        [name]: value,
      };
    });
  };

  // Patch APi
  const ProFileUpdate = async (e) => {
    e.preventDefault();
    const {
      username,
      email,
      phone_code,
      phone_no,
      birth_date,
      gender,
      country,
    } = ProGetApi;
    let token = "Bearer " + authToken;
    let data = await fetch(`https://api.bondbeam.com/api/user_general_setting/`, {
      method: "PATCH",
      body: JSON.stringify({
        username,
        email,
        phone_code,
        phone_no,
        birth_date,
        gender,
        country,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    data = await data.json();
    toast(data.msg) 
    setGSetUpdate(data)
  };

  // Profile Get Api Integrate
  const ProfileGet = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_general_setting/`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let data = await result.json();
    data = data.data;
    setProGetApi(data);
  };
  return (
    <div id="StyleSame1G" className="setClass container-fluid">
      <div id="StyleSame2G">
            <h1>General Settings</h1>
            <div className="row" id="setInnerNotify">
              <div className="col-md-12 col-lg-12 col-12">
                <label>User</label>
                <input
                  placeholder={ProGetApi.username}
                  name="username"
                  value={ProGetApi.username}
                  onChange={ProfilePut}
                />
              </div>

              <div className="col-md-12 col-lg-12 col-12">
                <label>Email</label>
                <input
                  placeholder={ProGetApi.email}
                  name="email"
                  value={ProGetApi.email}
                  onChange={ProfilePut}
                />
              </div>
            </div>
            <div className="row" id="innerNotidyGnder">
              <div className="col-md-12 col-lg-6 col-12">
                <div className="col-md-12 col-lg-12" id="InputSame">
                  <label>code</label>
                  <input
                    type="text"
                    placeholder={ProGetApi.phone_code}
                    name="phone_code"
                    value={ProGetApi.phone_code}
                    onChange={ProfilePut}
                  />
                </div>
              </div>

              <div className="col-md-12 col-lg-6 col-12">
                <div className="col-md-12 col-lg-12" id="InputSame">
                  <label>Phone</label>
                  <input
                    type="number"
                    placeholder={ProGetApi.phone_no}
                    name="phone_no"
                    value={ProGetApi.phone_no}
                    onChange={ProfilePut}
                  />
                </div>
              </div>
            </div>

            <div className="row" id="InnerGeneral">
              <div className="col-md-12 col-lg-6 col-12">
                <div className="col-md-12 col-lg-12" id="InputSame">
                  <label>Birthday</label>
                  <input
                    type="text"
                    placeholder={ProGetApi.birth_date}
                    name="birth_date"
                    value={ProGetApi.birth_date}
                    onChange={ProfilePut}
                  />
                </div>
              </div>

              <div className="col-md-12 col-lg-6 col-12">
                <div className="col-md-12 col-lg-12" id="InputSame">
                  <label>Gender</label>
                  <select
                    name="gender"
                    id="selet"
                    value={ProGetApi.gender}
                    onChange={ProfilePut}
                  >
                    <option>{ProGetApi.gender}</option>
                    {Gender.map((item, index) => {
                      return <option key={index}>{item.lab}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>

            <div id="InputSame" className="countryNow">
              <label>Country</label>
              <select name="country" onChange={ProfilePut}>
                <option>{ProGetApi.country}</option>
                {countryname.map((item, index) => {
                  return (
                    <option value={item.label} key={index}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <button onClick={ProFileUpdate}>save</button>
          </div>
          <ToastContainer />
      </div>
  );
};

export default G;
