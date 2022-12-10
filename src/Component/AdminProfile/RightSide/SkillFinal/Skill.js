import React, { useState, useEffect } from "react";
import "./Skill.css";
import SkillText from "./SkillText";
import SkillPUT from "./SkillPop/SkillPUT";
import DialogInput from './SkillPop/DialogInput'
import { Stack } from "@mui/material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const Exp = () => {
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
          `https://api.bondbeam.com/api/user_skill/?profile_id=${authUser.data.id}`,
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

  let Exp = profile.map((item) => {
    return {
      id:item.id,
      skill_title:item.skill_title,
      discription: item.discription,
      start_date: item.start_date,
      end_date: item.end_date,
    };
  });



     // Delete Api Experience
     const ExpDeleteEvent = async (id) => {
      let token = "Bearer " + authToken;
      const result = await fetch(
        `https://api.bondbeam.com/api/user_skill/${id}`,
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
        <h2>Skills</h2>
        <PlaylistAddIcon fontSize="large" sx={{cursor:'pointer'}} onClick={()=>setOpen(true)}/>
      </Stack>
      {profile.length > 0 && <SkillText  data={Exp} UpdateFun={SkillPUT} RemoveFun={ExpDeleteEvent} ProfileGet={ProfileGet} />}
    </div>
  );
};

export default Exp;
