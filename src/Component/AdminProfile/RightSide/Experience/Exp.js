import React, { useState, useEffect } from "react";
import TextHead from "../Info&About/TextBlock/TextHead";
import "./Exp.css";
import ExpText from "./ExpText";
import ExpPop from './ExperiencePop/ExpPop'
import ExpPUT from "./ExperiencePop/ExpPUT";
import { useNavigate } from "react-router-dom";
import DialogInput from './ExperiencePop/DialogInput'
import { Stack } from "@mui/material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// import { createContext } from "react";

const Exp = ({ExpUpdateFun}) => {
  const [profile, setProfile] = useState([])
  const [open, setOpen] = useState(false);
  // let naviaget = useNavigate()
  let [ExpDetele, setExpDetele]  = useState([]);
  // let [ExpDete, setExpDete]  = useState([]);
  // const [Now, setNow] = useState([]);
  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  // let id = authUser.data.id;

  // Profile Get Api Integrate
  // const ProfileGet = async () => {
  //   let token = "Bearer " + authToken;
  //   const result = await fetch(
  //     `https://api.bondbeam.com/api/user_experience/?profile_id=${id}`,
  //     {
  //       headers: {
  //         Authorization: token,
  //       },
  //     }
  //   );
  //   let data = await result.json();
  //   // console.log('data',data);
  //   data = data.data;
    
  //   setNow(data);
  //   // console.log('get api', data);
  // };
  const ProfileGet = async () => {
    try {
        let token = "Bearer " + authToken;
        const response = await fetch(
          `https://api.bondbeam.com/api/user_experience/?profile_id=${authUser.data.id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        let data = await response.json();
        setProfile(data.data)
    } catch (error) {
        console.log(error.message);
    }
  };
console.log(profile);
  useEffect(() => {
    ProfileGet();
  }, []);

  // let Exp = profile.map((item) => {
  //   return {
  //     title: item.experience_title,
  //     discription: item.discription,
  //     start_date: item.start_date,
  //     end_date: item.end_date,
  //     id : item.id,
  //     job_status : item.job_status,
  //     company_name:item.company_name
  //   };
  // });



     // Delete Api Experience
     const ExpDeleteEvent = async (id) => {
      let token = "Bearer " + authToken;
      const result = await fetch(
        `https://api.bondbeam.com/api/user_experience/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      let newData = await result.json();
      console.log(newData);
      ProfileGet()
    };


  

  return (
    // <UserContext.Provider value={{ProfileGet}}>
    <div className="exptext">
      {/* <TextHead title={"experience"} icon={<ExpPop ProfileGet={ProfileGet} ExpUpdate={(e)=>setExpDete(e)} />}  /> */}
      {/* <TextHead title={"experience"} icon={}  /> */}
      <DialogInput open={open} setOpen={setOpen} ProfileGet={ProfileGet} />
      <Stack direction='row' justifyContent='space-between' alignItems='center' id='experince' >  
        <h2>Experience</h2>
        <PlaylistAddIcon  fontSize="large" sx={{cursor:'pointer'}} onClick={()=>setOpen(true)}/>
      </Stack>
       {/* <ExpPop ProfileGet={ProfileGet} ExpUpdate={(e)=>setExpDete(e)} /> */}
      {/* {Exp.length>0 && (<ExpText ExpDatas={Exp} />)} */}

      {profile.length > 0 && <ExpText  data={profile} UpdateFun={ExpPUT} RemoveFun={ExpDeleteEvent} ProfileGet={ProfileGet} />}

      {/* <ExpText  data={Now} /> */}
    </div>
    // </UserContext.Provider>
  );
};

export default Exp;
