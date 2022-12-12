import React from 'react'
import { useEffect, useState } from 'react';
import Img from './ImgUpload';

const FinalIMG = () => {
    const [IMG, setIGM] =  useState([])
    console.log('again ll', IMG);

    useEffect(()=>{

    }, [])


     //  user local data & token
   let authToken = localStorage.getItem("token");
   let authUser = localStorage.getItem("user");
   authToken = JSON.parse(authToken);
   authUser = JSON.parse(authUser);
   let id = authUser.data.id;

    const Upload = (e) =>{

        const files = e.target.files[0];
        setIGM([...IMG, files]) 
        
        
    }
    // console.log('again', IMG);

    const SendData = () =>{
        const formData = new FormData();

        formData.append('images', IMG[0],IMG[0].name)
        
            
        let token = "Bearer " + authToken;
        fetch('https://api.bondbeam.com/newsfeed/user_post/',{
          method:'POST',
          body:formData,
          headers:{
            Authorization: token,
          }
        }).then((resp)=>{
            resp.json().then((result)=>{
              console.log("result", result);
            })
        })
        setIGM("")

    }


  return (
    <div>
        <h1>Img</h1>
        <div className="mb-3">
        <label htmlFor="formFileMultiple" className="form-label">
          Multiple files input example
        </label>
        <input
          className="form-control"
          type="file"
          name="images"
          onChange={(e) => Upload(e)}
          id="formFileMultiple"
          multiple
        />
        <button onClick={SendData}>save</button>
      </div>
    </div>
  )
}

export default FinalIMG