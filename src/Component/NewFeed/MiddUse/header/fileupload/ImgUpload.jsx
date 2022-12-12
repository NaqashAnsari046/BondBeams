import React, {useState} from "react";
import { useEffect } from "react";

const Img = () => {
  const [FormDataa, setFormData] = useState({
    images:'',
    description :''
  });
  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  let id = authUser.data.id;

  console.log('FormData', FormData);


  const Upload = (e) => {
    // console.log(e.target.files);
    // console.log(e.target.value);
    const files = e.target.files;
    const description = e.target.value;
    const Data =  {
      images:'',
      description :'',
      active(arg1, arg2){
        this.images = arg1;
        this.description = arg2;
      }
    }
    const formData = new FormData();
    // formData.append("images", files[0]);
    // gData.append("description", description);
    // formData.append("description", e.target.value);
    Data.active(e.target.files, e.target.value)
    // setFormData(formData);
    setFormData({images : Data.images, description : Data.description})
    // console.log('app', Data.images);
    // console.log('app', Data.description);
    // setFormData(formData)
    console.log(FormDataa)
  };

  const Savepost = () =>{
    const {images}  =FormDataa;
    let token = "Bearer " + authToken;
    fetch('https://api.bondbeam.com/newsfeed/user_post/',{
      method:'POST',
      body:FormDataa,
      headers:{
        Authorization: token,
      }
    }).then((res)=>{
      res.json().then((result)=>{
        console.log({"resut":result});
      })
    })
  }
  


  return (
    <div>
      <h1>img upload</h1>
      <div class="mb-3">
        <label htmlFor="formFileMultiple" class="form-label">
          Multiple files input example
        </label>
        <input
          class="form-control"
          type="file"
          name="images"
          onChange={(e) => Upload(e)}
          id="formFileMultiple"
          multiple
        />
      </div>
      {/* <input type='file' name='images' onChange={(e)=>Upload(e)} /> */}
      <input type="text" name="description" onChange={(e) => Upload(e)} />

      <div onClick={Savepost}>Save Post</div>
    </div>
  );
};

export default Img;
