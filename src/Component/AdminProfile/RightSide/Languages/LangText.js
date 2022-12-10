import { Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../img/MyProfile/work2.jfif";
import './Lang.css'

const ExpText = (props) => {
  const { data, UpdateFun,ExpStatUp,RemoveFun } = props;

  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);
  let Lang = data.map((item) => {
    return {
      language: item.language,
      id : item.id,
    };
  });
  return (

    <Grid container justifyContent='space-evenly' >
    {Lang.map((item,ind) => {
        return (<Grid item key={ind}>
             <button>{item.language}</button>
        </Grid>
            );
          })}
  </Grid>
  );
};

export default ExpText;
