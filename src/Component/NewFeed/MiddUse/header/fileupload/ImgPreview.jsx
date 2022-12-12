import React, { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Preview.css'

function ImgPreview({ PostCreateUp, icon, PostCreateUpFff, ProfileGet }) {
  // const {newsUpdate} = props;
  let navigate = useNavigate();
  const [IMG, setIGM] = useState([]);
  const [PostcreateUP, setPostcreateUP] = useState();
  const [IMGPre, setIGMPre] = useState();
 
  
  const [CreatBoolean, setCreatBoolean] = useState(false);
  // console.log('boolean', CreatBoolean);
  const [Description, setDescription] = useState({
    description: "",
  });

  const PostNewFeedEvent = (e) => {
    const files = e.target.files;
    const filesURL =URL.createObjectURL(e.target.files[0]);
    setIGM(files);
    setIGMPre(filesURL)
  };

  const PostNewFeedEventText = (e) => {
    const DescriptionText = e.target.value;
    setDescription({
      description: DescriptionText,
    });
  };

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  let Profile_pic = localStorage.getItem("Profile_pic");
  let username = localStorage.getItem("username");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  Profile_pic = JSON.parse(Profile_pic);
  username = JSON.parse(username);
  let id = authUser.data.id;

  const PostCreate = async (e) => {
    const formData = new FormData();
    for (let i = 0; i < IMG.length; i++) {
      formData.append("images", IMG[i], IMG[i].name);
    }
    formData.append("description", Description.description);


    let token = "Bearer " + authToken;
    let result = await fetch("https://api.bondbeam.com/newsfeed/user_post/", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token,
      },
    });
    result = await result.json();
    setPostcreateUP(result)
    if(result.success == true){
      toast('Post Created')
      navigate('/newsfeed')
    }
    setCreatBoolean(result);

    PostCreateUp(CreatBoolean);
    
    setIGM("");
    setIGMPre('')
    // console.log(ProfileGet);
    ProfileGet()

  };

  
  // PostCreateUpFff(PostcreateUP)


  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Create post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="header col-12">
                <div className="header_inp_pro">
                  <div className="" id="PostPopImg">
                    <img src={Profile_pic} />
                  </div>

                  <h1>{username}</h1>

                  <input
                    type="text"
                    className="ImgpopPOst"
                    placeholder={`what is in your mind,  ${username} ?`}
                    name="description"
                    value={Description.description}
                    onChange={PostNewFeedEventText}
                  />
                </div>
                <div className="col-12" id="PostCreatePP">
                    <div className="col-2">
                      <div className="setImgPostC">
                        {/* <h1>helo</h1> */}
                        
                        {IMGPre ? "":<>
                        <label htmlFor="file-upload">
                          <i className="fa-solid fa-image"></i>
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          onChange={(e) => PostNewFeedEvent(e)}
                          multiple
                        /> 

                        </> }
                        {IMGPre ? <img src={IMGPre} id='setimgPOP' /> : ''}
                        
                        
                        {/* <ImgPreview /> */}
                      </div>
                     
                    </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div> */}
            <div className="modal-footer">

              <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                className="btn btn-secondary col-12 "
                onClick={PostCreate}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <a
        className=""
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        {/* <i className="fa-solid fa-image"></i> */}
        {icon}
      </a>
      <ToastContainer />
    </>
  );
}

export default ImgPreview;
