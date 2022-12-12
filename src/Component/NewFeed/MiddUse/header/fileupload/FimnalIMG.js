import React from 'react'
import { useState } from 'react'

const FimnalIMG = () => {

  const [description, setdescription] = useState('');
  const [images, setimages] = useState('');
  const [videos, setvideos] = useState('');
  const [title, settitle] = useState('');
  const [bg_color, setbg_color] = useState('');

   //  user local data & token
   let authToken = localStorage.getItem("token");
   let authUser = localStorage.getItem("user");
   authToken = JSON.parse(authToken);
   authUser = JSON.parse(authUser);
   let id = authUser.data.id;



  const SaveSend = async() =>{
    console.log(images, description);

    const formData = new FormData();

    formData.append('images', images)
    formData.append('description',description )

    console.log('form data', formData);
    let token = "Bearer " + authToken;
    let result =await fetch('https://api.bondbeam.com/newsfeed/user_post/',{
      method:'POST',
      body:formData,
      headers:{
        'Content-Length': images.length,
        Authorization: token,
    }
     })

     alert("Data Save")

}

  return (
    <div class="mb-3">
        <label htmlFor="formFileMultiple" class="form-label">
          Multiple files input example
        </label>
        <input
          type="file"
          name="images"
          onChange={(e) => setimages(e.target.files[0])}
          id="formFileMultiple"
        />

<input
          type="text"
          name="description"
          onChange={(e) => setdescription(e.target.value)}
          multiple
        />

        <button onClick={SaveSend}>Send Data</button>
      </div>
  )
}

export default FimnalIMG