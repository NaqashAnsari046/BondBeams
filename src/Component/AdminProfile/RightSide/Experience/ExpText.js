import { Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import img from "../../../img/MyProfile/work2.jfif";
import './Exp.css'
// import { UserContext } from "./Exp";

const ExpText = (props) => {
  // const context = useContext(UserContext);
  // console.log(context);
  const { data, setremove, UpdateFun, ExpStatUp, RemoveFun, ProfileGet } = props;
  // const [Now, setNow] = useState([]);



  let params = useParams();
  let navigate = useNavigate();
  // const [Final, setFinal] = useState([]);
  // useEffect(() => {
  //   setFinal(data);
  // }, [ExpStatUp]);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);



  let Exp = data.map((item) => {
    return {
      title: item.experience_title,
      discription: item.discription,
      start_date: item.start_date,
      end_date: item.end_date,
      id: item.id,
      job_status: item.job_status,
      company_name: item.company_name
    };
  });
  return (

    <div className="row">
      <Grid container>
        {Exp.map((item, ind) => {
          return (
            <Grid container item sm={12} md={6} p={2}>
              <Grid item xs={3} display='flex' justifyContent={'center'} alignItems='center'><img width='80px' src={img} alt="avatar" />
              </Grid>
              <Grid item xs={9} p={2}>
                <Stack direction='column' lineHeight={'5px'} justifyContent='center'>
                  <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <p style={{fontWeight:'bold'}}>{item.title}</p>
                    <Stack direction='row' justifyContent='center' alignItems='center'>
                      <UpdateFun ExpStatUp={ExpStatUp} userid={item.id} />
                      <NavLink
                        className="fa-solid fa-trash deleteicon"
                        onClick={() => RemoveFun(item.id)}
                      ></NavLink>
                    </Stack>
                  </Stack>
                    <p style={{color:'#0A66C2'}}>{item.company_name} - {item.job_status}</p>
                    <p style={{color:'silver'}}>{item.start_date} - {item.end_date}</p>
                    <p>{item.discription}</p>
                </Stack>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ExpText;
