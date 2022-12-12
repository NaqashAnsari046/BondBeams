import React, { useState, useEffect } from "react";
import "./Lang.css";
import LangText from "./LangText";
import LangPUT from "./LanguagesPop/LangPUT";
import DialogInput from './LanguagesPop/DialogInput'
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
          `https://api.bondbeam.com/api/user_language/?profile_id=${authUser.data.id}`,
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
        `https://api.bondbeam.com/api/user_language/${id}`,
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
        <h2>Languages</h2>
        <PlaylistAddIcon fontSize="large" sx={{cursor:'pointer'}} onClick={()=>setOpen(true)}/>
      </Stack>
      {profile.length > 0 && <LangText  data={profile} UpdateFun={LangPUT} RemoveFun={ExpDeleteEvent} ProfileGet={ProfileGet} />}
    </div>
  );
};

export default Edu;
