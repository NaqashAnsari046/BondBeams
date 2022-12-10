import React, { useState, useEffect } from "react";
import "./Pro.css";
import ProText from "./ProText";
import ProPUT from "./ProjectPop/ProPUT";
import DialogInput from './ProjectPop/DialogInput'
import { Stack } from "@mui/material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const Edu = () => {
  const [profile, setProfile] = useState([])
  const [open, setOpen] = useState(false);
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);

  const ProfileGet = async () => {
    try {
        let token = "Bearer " + authToken;
        const response = await fetch(
          `https://api.bondbeam.com/api/user_project/?profile_id=${authUser.data.id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        let data = await response.json();
        setProfile(data.data)
        console.log('Data project: ',data.data);
    } catch (error) {
        console.log(error.message);
    }
  };
  useEffect(() => {
    ProfileGet();
  }, []);

     // Delete Api Experience
     const ExpDeleteEvent = async (id) => {
      let token = "Bearer " + authToken;
      const result = await fetch(
        `https://api.bondbeam.com/api/user_project/${id}`,
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
    <div className="exptext">
      <DialogInput open={open} setOpen={setOpen} ProfileGet={ProfileGet} />
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <p style={{fontSize:'20px', fontWeight:'600'}}>Projects</p>
        <PlaylistAddIcon fontSize="large" sx={{cursor:'pointer'}} onClick={()=>setOpen(true)}/>
      </Stack>
      {profile.length > 0 && <ProText  data={profile} UpdateFun={ProPUT} RemoveFun={ExpDeleteEvent} ProfileGet={ProfileGet} />}
    </div>
  );
};

export default Edu;
