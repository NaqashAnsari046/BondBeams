import React, { useState, useEffect } from "react";
import "./Edu.css";
import EduText from "./EduText";
import EduPUT from "./EducationPop/EduPUT";
import DialogInput from './EducationPop/DialogInput'
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
          `https://api.bondbeam.com/api/user_education/?profile_id=${authUser.data.id}`,
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

     // Delete Api Experience
     const ExpDeleteEvent = async (id) => {
      let token = "Bearer " + authToken;
      const result = await fetch(
        `https://api.bondbeam.com/api/user_education/${id}`,
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
      <Stack direction='row' justifyContent='space-between' alignItems='center' id='experince' >
        <h2>Education</h2>
        <PlaylistAddIcon fontSize="large" sx={{cursor:'pointer'}} onClick={()=>setOpen(true)}/>
      </Stack>
      {profile.length > 0 && <EduText  data={profile} UpdateFun={EduPUT} RemoveFun={ExpDeleteEvent} ProfileGet={ProfileGet} />}
    </div>
  );
};

export default Edu;
