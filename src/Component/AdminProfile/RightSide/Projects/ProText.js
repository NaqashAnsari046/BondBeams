import { Button, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../img/MyProfile/work2.jfif";
import './Pro.css'
import EditIcon from '@mui/icons-material/Edit';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DeleteIcon from '@mui/icons-material/Delete';
const ExpText = (props) => {
  const { data, UpdateFun,ExpStatUp,RemoveFun } = props;

  let authToken = localStorage.getItem("token");
  authToken = JSON.parse(authToken);
  let Pro = data.map((item) => {
    return {
      company_name:item.company_name,
      title: item.project_title,
      discription: item.discription,
      start_date: item.start_date,
      end_date: item.end_date,
      id : item.id,
    };
  });
  return (

    <div className="row">
      {Pro.map((item, ind) => {
            return (
              // <div className="row" key={ind}>
              //   <div className="col-md-1 col-lg-1 col-2" id="sdassd">
              //     <img src={img} />
              //   </div>
              //   <div
              //     className="col-md-11 col-lg-11 col-10"
              //     id="setCertyLicence"
              //   >
              //     <div>
              //       <h1>
              //         <span>{item.project_title}</span>
              //       </h1>
              //       <div>
              //         <h1>
              //         ID Associated with <span>{item.company_name}</span>
              //         </h1>
              //         <span id="setspanprooject">{item.start_date} - {item.end_date}</span> 
              //       </div>
              //     </div>
              //    <div >
              //      <div>
              //       {/* <ProPUT /> */}
              //       <NavLink
              //       className="fa-solid fa-trash deleteicon"
              //       onClick={() => RemoveFun(item.id)}
              //     ></NavLink>
              //      </div>
              //     <button id='projectBtn'>Download</button>
              //    </div>
              //   </div>
              // </div>
              <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Stack direction='row' columnGap={1} alignItems='flex-start' margin='10px 0px'>
                <img width='50px' height='50px' src={img} alt="avatar" />
                <Stack direction='column' justifyContent='center' sx={{lineHeight:'5px'}} >
                  <p style={{fontWeight:'bold'}}>{item.title}</p>
                  <p style={{color:'#0A66C2'}}>ID associated with <span style={{fontWeight:'bold'}}>{item.company_name}</span></p>
                  <p>{item.start_date} - {item.end_date}</p>
                </Stack>
              </Stack>
              <Stack direction='column' rowGap={1} margin='10px 0px'>
                <Stack direction='row' alignItems='center' justifyContent='center' columnGap={4}>
<EditIcon fontSize="medium" sx={{cursor:'pointer'}}/>
<DeleteIcon fontSize="medium" sx={{cursor:'pointer'}} onClick={()=>RemoveFun(item.id)}/>
                </Stack>
                {/* <button style={{backgroundColor:'black', color:'white'}}>Show Project</button> */}
              </Stack>
              </Stack>
            );
          })}
    </div>
  );
};

export default ExpText;
