import React, {useEffect, useState} from "react";
import "./ProSetting.css";
import Relation from "./Relation";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProfileSetting = () => {
 const [ ProGetApi, setProGetApi ] = useState({
    first_name:'',
    last_name:"",
    about:"",
    address:"",
    website:"",
    relationship:"",
    work_place:"",
    company_site:""
 });

 useEffect(()=>{
  ProfileGet();
 }, [])


 //  user local data & token
  let authToken = localStorage.getItem('token');
  authToken = JSON.parse(authToken);


  const ProfilePut  = (e) =>{
      const {name,value} = e.target;

      setProGetApi((PreV)=>{
        return{
          ...PreV,
          [name]:value
        }
      })

}

// Patch APi
const ProFileUpdate = async(e) =>{
    e.preventDefault();
    const {first_name,last_name,about,address,website,relationship,work_place,company_site} = ProGetApi;
    let token = "Bearer "+authToken
    let data = await fetch(`https://api.bondbeam.com/api/user_profile_settings/`,{
      method:"PATCH",
      body:JSON.stringify({first_name,last_name,about,address,website,relationship,work_place,company_site}),
      headers:{
        "Content-Type":"application/json",
        Authorization:token
      }
    });
    data = await data.json();
    toast(data.msg)
  };


  // Profile Get Api Integrate
  const ProfileGet = async() =>{
    let token = "Bearer "+authToken
    const result = await fetch(`https://api.bondbeam.com/api/user_profile_settings`,{
      headers:{
        Authorization:token,
      }
    });
    let data = await result.json()
    data = data.data
    setProGetApi(data)
  }

  
  return (
    <div id="StyleSame1P">
      <div id="StyleSame2P">
        <h1>Profile Settings</h1>
        <div className="row" id="setInnerNotify ">
          <div className="col-md-6 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="InputSame">
              <label>First name</label>
              <input type="text" placeholder={ProGetApi.first_name} name='first_name' value={ProGetApi.first_name}  onChange={ProfilePut} />
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="InputSame">
              <label>Last name</label>
              <input type="text" placeholder={ProGetApi.last_name}  name='last_name' value={ProGetApi.last_name}  onChange={ProfilePut} />
            </div>
          </div>

         <div className="col-md-12 col-lg-12" id="setInnerNotify">
         <label id="abooutNotify">About</label>
          <input placeholder={ProGetApi.about}  name='about' value={ProGetApi.about}  onChange={ProfilePut} />
         </div>

         <div className="col-md-12 col-lg-12" id="setInnerNotify">
         <label id="abooutNotify">Location</label>
          <input placeholder={ProGetApi.address}  name='address' value={ProGetApi.address}  onChange={ProfilePut} />
         </div>
        </div>
        <div className="row" id="innerNotidyGnder">
        <div className="col-md-12 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="InputSame">
              <label>Website</label>
              <input type="text" placeholder={ProGetApi.website} name='website' value={ProGetApi.website}  onChange={ProfilePut} />
            </div>
          </div>

          <div className="col-md-12 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="InputSame">
              <label>Relationship</label>
              <select name='relationship' value={ProGetApi.relationship} placeholder={ProGetApi.relationship} onChange={ProfilePut}>
              <option>{ProGetApi.relationship}</option>
              {Relation.map((item, index) => {
                return <option key={index}>{item.relationship}</option>;
              })}
              </select>
            </div>
            </div>
        </div>

        <div className="row" id="innerNotidyGnder">
        <div className="col-md-12 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="InputSame">
              <label>Workng at</label>
              <input type="text" placeholder={ProGetApi.work_place} name='work_place' value={ProGetApi.work_place}  onChange={ProfilePut} />
            </div>
          </div>

          <div className="col-md-12 col-lg-6 col-12">
            <div className="col-md-12 col-lg-12" id="InputSame">
              <label>Company</label>
              <input type="text" placeholder={ProGetApi.company_site} name='company_site' value={ProGetApi.company_site}  onChange={ProfilePut} />
            </div>
            </div>
        </div>
        <button onClick={ProFileUpdate}>save</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfileSetting;
