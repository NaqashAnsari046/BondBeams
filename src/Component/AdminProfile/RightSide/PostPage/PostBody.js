import React, { useState, useEffect, useMemo } from "react";
import "./Post.css";
import Profile from "../../../img/MyProfile/userProfile.jpg";
import PostHeadFeedNew from "../../../NewFeed/MiddUse/PostCenter/PostHeadFeedNew";
import PostGallary1 from "./PostGallary/PostGallay1";
import Comment from "../../../NewFeed/MiddUse/TextArea/Comment";
import { NavLink, useNavigate } from "react-router-dom";
import Head from "../../../NewFeed/MiddUse/header/head";
import { Box, Dialog, Grid, Stack } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// ==================================== post body main function (--START--)

const PostBody = ({ getapi, NewFeedGetApi, ProfileGet }) => {
  // ------------- new states for like and dislike (start)
  const [likesBeforeShare, setLikesBeforeShare] = useState(0)
  const [isLike, setIsLike] = useState(false)
  // ------------- new states for like and dislike (end)
  const [openDialoge, setOpenDialoge] = useState(false);
  const [currImage, setCurrImage] = useState("");
  // let { getapi, namse } = props;
  const [dat, setdat] = useState();
  const [CommintID, setCommintID] = useState();
  const [PostCreateUpdate, setPostCreateUpdate] = useState([]);
  const [LocakShareTwo, setLocakShareTwo] = useState([]);
  const [LikeSharePosdDelete, setLikeSharePosdDelete] = useState([]);
  const [deletePostUpdate, setdeletePostUpdate] = useState([]);
  const [ShowCommint, setShowCommint] = useState(false);
  const [ButtonTog, setButtonTog] = useState(false);
  const [LikePost, setLikePost] = useState(false);
  const [LikePostOriginal, setLikePostOriginal] = useState(false);
  const [LikePostIncrement, setLikePostIncrement] = useState(0);
  const [LikeDelteOriginal, setLikeDelteOriginal] = useState(false);
  const [GetCommintData, setGetCommintData] = useState([]);
  const [AgainSharePost, setAgainSharePost] = useState([]);
  const [LocalLikeTwo, setLocalLikeTwo] = useState([]);
  const [OriginalPostLike, setOriginalPostLike] = useState(0);
  const [OriginalValue, setOriginalValue] = useState(false);
  console.log("true",OriginalValue);
  const [TotalVaue, setTotalVaue] = useState(0);
  const [pOSTU, setpOSTU] = useState();
  const [LikePostSharedGET, setLikePostSharedGET] = useState([]);
  const navigate = useNavigate();
  const [likeID, setlikeID] = useState();
  const [likesPost, setlikesPost] = useState({
    post_id: CommintID,
  });
  const [commentId, setcommentId] = useState();
  // console.log('aa', NewFeedGetApi);

  var date = useEffect(() => {
    // setProfileGet(NewFeedGetApi);
    setdat(data);
    // LikeGet();
    // hideAShow();
   
  }, [getapi, pOSTU, ShowCommint, GetCommintData]);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  let userData = JSON.parse(user);

  // Profile Get Api Integrate

  // const ProfileGet = async (props) => {
  //   let token = "Bearer " + authToken;
  //   const result = await fetch(
  //     `https://api.bondbeam.com/newsfeed/list_newsfeed/`,
  //     {
  //       headers: {
  //         Authorization: token,
  //       },
  //     }
  //   );
  //   let FinalResult = await result.json();
  //   setNewFeedGetApi(FinalResult.data);

  // };

  let data = NewFeedGetApi.map((item) => {
    return item
  });

  console.log('News Feed Object: ', data);

  // Delete Api
  const EduDeleteEvent = async (id) => {
    let token = "Bearer " + authToken;
    // console.log("delet id", id);
    const result = await fetch(
      `https://api.bondbeam.com/newsfeed/delete_user_post/`,
      {
        method: "POST",
        body: JSON.stringify({
          delete: "Confirm",
          post_id: id,
        }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    // console.log('id', id)
    let newdata = await result.json();
    ProfileGet();
    setdeletePostUpdate(newdata);
    if (newdata.status == true) {
      setpOSTU(NewFeedGetApi);
      navigate("/newsfeed");
    }
  };

  let GetVisitId = NewFeedGetApi.map((item) => {
    return item.user;
  });

  //visit post git id
  let GetPostId = NewFeedGetApi.map((item) => {
    return item.id;
  });

  // console.log('git', NewFeedGetApi);
 

  // Visit Profile
  const VisitProfileOther = async (id) => {
    let token = "Bearer " + authToken;
    const UserExp = await fetch(
      `https://api.bondbeam.com/api/user_experience/?profile_id=${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let userExp = await UserExp.json();
    let userExpCondition = userExp;
    if (userExpCondition.status == true) {
      navigate("/userprofile", { state: { id: id } });
    }
  };

  // like  Get
  const LikeGet = async (id) => {
    let token = "Bearer " + authToken;
    let likessGet = await fetch(
      `https://api.bondbeam.com/newsfeed/like_post/?post_id=${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    likessGet = await likessGet.json();
  };

  //  post share
  const sharePost = async (id) => {
    let token = "Bearer " + authToken;
    let sharePost = await fetch(
      `https://api.bondbeam.com/newsfeed/share_post/`,
      {
        method: "POST",
        body: JSON.stringify({ post_id: id }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
    sharePost = await sharePost.json();
    setAgainSharePost(sharePost.data.id);
    setPostCreateUpdate(sharePost);
    setLocakShareTwo(sharePost);
    // setLikeToggel(sharePost)

    setTotalVaue(sharePost.data.likes);

    if (sharePost.success == true) {
      setButtonTog(true);
    }
  };

  // likeShared Api
  const LikePostShared = async (id) => {
    // setlikeID(id);
    let token = "Bearer " + authToken;
    let likess = await fetch(`https://api.bondbeam.com/newsfeed/like_post/`, {
      method: "POST",
      body: JSON.stringify({ post_id: id }),
      headers: {
        Authorization: token,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    likess = await likess.json();
    setLikePostSharedGET(likess);
    setLocalLikeTwo(likess);

    if (likess.status == true) {
      setLikePost(true);
      setTotalVaue(TotalVaue + 1)
      // setOriginalPostLike(OriginalPostLike + 1)
    }
  };

  

  const LikePostSharedOriginal = async (id,ind,like,e) => {

    console.log();

// ye likes share krny sy pehly k hain
    console.log(e.target.innerText);
    if(e.target.innerText=="Dislike"  ){
      e.target.innerText="like"
      console.log("dael");
      let token = "Bearer " + authToken;
      let likess = await fetch(`https://api.bondbeam.com/newsfeed/like_post/`, {
        method: "POST",
        body: JSON.stringify({ post_id: id, dislike: true }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      likess = await likess.json();
      console.log('delete', likess);

      if(likess.status == true){
        setOriginalValue(false)
      }
    }
    else{
      e.target.innerText="dislike"
      let token = "Bearer " + authToken;
      let likess = await fetch(`https://api.bondbeam.com/newsfeed/like_post/`, {
        method: "POST",
        body: JSON.stringify({ post_id: id }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      likess = await likess.json();
      console.log('likesllllll', likess);
      if(likess.status == true){
        setOriginalValue(true)
        console.log("okkkkkkk");
      }
    }
    setlikeID(ind);
  
   

    // if (likess.data.post == id) {
    //   setOriginalValue(true)
    //   setLikePostOriginal(true)
    //   setLikePostIncrement(LikePostIncrement + 1)
    // }
  };

  console.log('like Ooooo',OriginalValue);


  
  
  
  
  //LikeSharedDeleteAPi
  const LikePostSharedDelete = async (id) => {
    // setlikeID(id);
    let token = "Bearer " + authToken;
    let likess = await fetch(`https://api.bondbeam.com/newsfeed/like_post/`, {
      method: "POST",
      body: JSON.stringify({ post_id: id, dislike: true }),
      headers: {
        Authorization: token,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    likess = await likess.json();
    setLikeSharePosdDelete(likess);
    console.log(likess);
    
    if (likess.status == true) {
      setLikePost(false);
      // setLikePostOriginal(true);
      setTotalVaue(TotalVaue - 1)
      setOriginalPostLike(OriginalPostLike - 1)
    }
  };


  const LikePostSharedDeleteOriginal = async (id, likes) => {
    // setlikeID(id);
    // ye naqash saab ka code hy, 
    let token = "Bearer " + authToken;
    let likess = await fetch(`https://api.bondbeam.com/newsfeed/like_post/`, {
      method: "POST",
      body: JSON.stringify({ post_id: id, dislike: true }),
      headers: {
        Authorization: token,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    likess = await likess.json();
    
    if (likess.status == true) {
      setLikeDelteOriginal(true)
      setLikePostOriginal(false)
      setLikePostIncrement(LikePostIncrement - 1)
      // setLikePost(false);
      // setLikePostOriginal(false);
      // // setTotalVaue(TotalVaue - 1)
      // // setOriginalPostLike(OriginalPostLike - 1)
      // setOriginalValue(likes - 0)
      // setOriginalPostLike(likes)
    }
    }
  



  
  // commint get
  const hideAShow = async (id,ids) => {
    setCommintID(id);
    console.log('ids', ids);
    

    let token = "Bearer " + authToken;
    let getCommint = await fetch(
      `https://api.bondbeam.com/newsfeed/post_comment/${ids}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    getCommint = await getCommint.json();
    setGetCommintData(getCommint.results);
    ProfileGet();
    setcommentId(id);
    // console.log('getCommint', getCommint);

    if (ShowCommint==false) {
      setShowCommint(true);
    } else {
      setShowCommint(false);
    }
  };
// random images link from google



// =============================================== by: hassaan

// ---------------- For Like Post
const handleLikeBeforeShare = async(id) => {
  let token = "Bearer " + authToken;
      let likess = await fetch(`https://api.bondbeam.com/newsfeed/like_post/`, {
        method: "POST",
        body: JSON.stringify({ post_id: id }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      ProfileGet()
}

// ---------------- For Dislike Post
const handleDislikeBeforeShare = async(id) => {
  console.log("Deleted User Id: ", id);
  let formdata = new FormData()
  formdata.append('post_id','id')
  formdata.append('dislike','true')
  let token = "Bearer " + authToken;
    let likess = await fetch(`https://api.bondbeam.com/newsfeed/like_post/`, {
      method: "POST",
      body: JSON.stringify({post_id:id, dislike:"true"}),
      headers: {
        Authorization: token,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    ProfileGet()
}



  return (
    <div className="post5newfeeed">
      {PostCreateUpdate.success == true ? (
        <div id="setAdmintPost">
          {/* {console.log("dsfsd",PostCreateUpdate.data.id)} */}

          {/* shared header    */}
          <div className="row PostHead">
            <div className="col-md-11 col-lg-11 col-11" id="setHeadFeed">
              <span id="spanBNorder">
                <span></span>

                {PostCreateUpdate.data.shared_post.next_user.user_pic ? (
                  <img
                    src={PostCreateUpdate.data.shared_post.next_user.user_pic}
                    alt="userimg"
                  />
                ) : (
                  <img src={Profile} alt="userimg" />
                )}
              </span>

              <div id="setTextFeed">
                <h4>{PostCreateUpdate.data.shared_post.next_user.username}</h4>
                <span>
                  {PostCreateUpdate.data.shared_post.created_at.slice(0, 10)}
                </span>
              </div>
            </div>
            <div className="col-md-1 col-lg-1 col-1" id="setIconFeed">
              <div id="setpoetDelete">
                <div className="btn-group">
                  <div className="btn-group dropstart" role="group">
                    <span
                      type="button"
                      className="toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                      <span className="visually-hidden"></span>
                    </span>
                    <ul className="dropdown-menu">
                      {
                        // userData.data.id==item.user.id
                        "hi" ? (
                          <i
                            className="fa-solid fa-trash"
                            id="setDeletPOst"
                            // onClick={() => EduDeleteEvent(item.id)}
                          ></i>
                        ) : (
                          <i className="fa-solid fa-circle-exclamation"></i>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* shared body */}
          <div className="bodyimg">
            {PostCreateUpdate.data.images.map((items, ind) => {
              return <img src={items.post_image} key={ind} />;
            })}
          </div>

          {/* like & commint Share  */}

          <div id="setCommintLike">
            <div>
              {  TotalVaue > 0  ? <span  id='setLikeshared' ><i className="fa-solid fa-thumbs-up text-info"></i>  {TotalVaue} likes</span>: ''}
            </div>
            <h5>
              
              <span> {PostCreateUpdate.data.share} shares</span>
            </h5>
          </div>

          {/* share like & commint & share */}
          <div className="row imgBar">
            <div className="col-md-3 col-lg-3 col-3" id="likesaa">
              {ButtonTog ? (
                <div>
                  {LikePost ? (
                    <i
                      onClick={() =>
                        LikePostSharedDelete(PostCreateUpdate.data.id)
                      }
                      className="fa-solid fa-thumbs-up"
                    >
                    </i>
                  ) : (
                    <i
                      onClick={() => LikePostShared(PostCreateUpdate.data.id)}
                      className="fa-regular fa-thumbs-up"
                    >
                    </i>
                  )}
                </div>
              ) : (
                "no like"
              )}
            </div>
            <div className="col-md-6 col-lg-4 col-3" id="likesaa">
              <i className="fa-solid fa-message"></i>
              {/* <span onClick={() => hideAShow(item.id, PostID)}>comments</span> */}{" "}
              commint
            </div>
            <div
              className="col-md-3 col-lg-3 col-3"
              // onClick={() => sharePost(item.id)}
              id="likesaa"
            >
              <i className="fa-solid fa-share"></i>
              <span onClick={() => sharePost(AgainSharePost)}> share</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}


      






      {NewFeedGetApi.map((item, ind) => {
        let ans = item.updated_at;
        ans = ans.split("T")[0];
        let get = ans.split("-")[1];
        function getMonthName(get) {
          const date = new Date();
          date.setMonth(get - 1);

          return date.toLocaleString("en-US", { month: "short" });
        }
        var getdate =
          ans.split("-")[2] + "-" + getMonthName(get) + "-" + ans.split("-")[0];

        return (
          <div className="" id="setAdmintPost" key={ind}>
            <div className="row PostHead" key={ind}>
              <div className="col-md-11 col-lg-11 col-11" id="setHeadFeed">
                <span
                  id="spanBNorder"
                  onClick={() => VisitProfileOther(item.user.id)}
                >
                  {item.user.user_pic ? (
                    <img src={item.user.user_pic} />
                  ) : (
                    <img src={Profile} alt="userimg" />
                  )}
                </span>

                <div id="setTextFeed">
                  <h4 onClick={() => VisitProfileOther(item.user.id)}>
                    {item.user.username}
                  </h4>
                  <span>{getdate}</span>
                </div>
              </div>

              <div className="col-md-1 col-lg-1 col-1" id="setIconFeed">
                <div id="setpoetDelete">
                  <div className="btn-group">
                    <div className="btn-group dropstart" role="group">
                      <span
                        type="button"
                        className="toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                        <span className="visually-hidden"></span>
                      </span>
                      <ul className="dropdown-menu">
                        {userData.data.id == item.user.id ? (
                          <i
                            className="fa-solid fa-trash"
                            id="setDeletPOst"
                            onClick={() => EduDeleteEvent(item.id)}
                          ></i>
                        ) : (
                          <i className="fa-solid fa-circle-exclamation"></i>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p>{item.description}</p>

            <div className="bodyimg">
              {/* {item.images.map((items, ind) => {
                return <img src={items.post_image} key={ind} />;
              })} */}
<Grid container style={{overflow:"hidden"}}>
                {
                  item.images?.slice(0,2).map((itm) => <Grid p={'5px'} key={itm.id} item xs={item.images?.length === 1 ? 12 : 6}>
                    <Box sx={{
                      backgroundImage: `url(${itm.post_image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      height: 180,
                      ':hover':{
                        cursor: 'pointer',
                        transform: 'scale(1.1)',
                        transition: 'all 0.5s ease',

                      }
                    }} onClick={()=>{setOpenDialoge(true)
                      setCurrImage(itm.post_image)
                    }}></Box>
                  </Grid>)
                }
                {
                  item.images?.slice(2,5).map((itm, index) => <Grid p={'5px'} key={itm.id} item xs={item.images.length === 3 ? 12 : item.images.length === 4 ? 6 : 4}>
                    <Box sx={{
                      backgroundImage: `url(${itm.post_image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      height: '120px',
                      // black transparent background
                      background: item.images.length > 5 && index === 2 ? 'rgba(0,0,0,0.5)' : null,
                      ':hover':{
                        cursor: 'pointer',
                        transform: 'scale(1.1)',
                        transition: 'all 0.5s ease',
                      }
                    }}onClick={()=>{setOpenDialoge(true)
                      setCurrImage(itm.post_image)
                    }}>
                      <Box sx={{width:'100%', height:'100%', color:'white',display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',}}>
                        {/* <div>{console.log('looooooooooooooooo', item)}</div> */}
                      {
                      item.images.length > 5 && index === 2 ? <h3>+{item.images.length}</h3>: ''
                    }
                      </Box>
                      </Box>
                  </Grid>)
                }
      <Dialog
        open={openDialoge}
        onClose={()=>setOpenDialoge(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <Box sx={{width:'100%'}}>
          <img src={currImage} alt="image" style={{width:'100%', height:'100%'}}/>
        </Box> */}
        <Stack direction='row' justifyContent='center' alignItems='center'>
          {/* arrow left and right side by side and center will be image */}
          <ChevronLeftIcon fontSize="large" onClick={()=>{setCurrImage(item.images[item.images.indexOf(item.images.find((item)=>item.post_image === currImage)) - 1].post_image)}}/>
          <Box sx={{width:'700px', height:'300px'}}>
          <img src={currImage} alt="image" style={{width:'100%', height:'100%'}}/>
        </Box>
          <ChevronRightIcon fontSize="large" onClick={()=>{setCurrImage(item.images[item.images.indexOf(item.images.find((item)=>item.post_image === currImage)) + 1].post_image)}}/>
        </Stack>
      </Dialog>
              </Grid>
            </div>

            <div id="setCommintLike">
              {/* <h5 onClick={()=>LikeGet(item.id)}><i className="fa-solid fa-thumbs-up"></i> {item.likes}</h5>  */}

              {/* {LikePostOriginal ? <span><i className="fa-solid fa-thumbs-up text-info"></i> {item.likes}</span>  : ''} */}
              {item.likes > 0 && <span><ThumbUpAltIcon sx={{cursor:'pointer', color:'#17A2B8'}}/>&nbsp;{item.likes}</span>}





              <h5>
                {item.comments > 0 ? (
                  <span>{item.comments} comments </span>
                ) : (
                  ""
                )}

                {/* {item.share > 0 ? <div>{LocakShareTwo.success === true ? <span>sgfsder</span> :  <span> {item.share} shares</span>}</div> : ""} */}
                <div>
                  {LocakShareTwo.success === true ? (
                    <span>{LocakShareTwo.data.share} share</span>
                  ) : item.share > 0 ? (
                    <span> {item.share} shares</span>
                  ) : (
                    ""
                  )}
                </div>

                {/* {LocakShareTwo.success == true ? <>{item.share > 0 ? <span> {item.share} shares</span> : ""}</> : <>{LocakShareTwo ? <span>{LocakShareTwo} shares</span> :'' }</>} */}

                {/* {console.log('share iner',LocakShareTwo.data.share)} */}
              </h5>
            </div>

            <div className="row imgBar">



              {/* <div
                className="col-md-3 col-lg-3 col-3"
                onClick={() => LikePostShared(item.id)}
                id="likesaa"
              >
                {item.like == true ? (
                  <i className="fa-solid fa-thumbs-up"></i>
                ) : (
                  <i className="fa-regular fa-thumbs-up"></i>
                )}
                <span>likes</span>
              </div> */}
            {/* <div className="col-md-3 col-lg-3 col-3" id="likesaa" onClick={(e) => LikePostSharedOriginal(item.id,ind,item.like,e)}>
              {item.like?"dislike":<i className="fa-regular fa-thumbs-up">like</i>
            }
            </div> */}

            {/* by: Hassaan Hameed */}
            <div className="col-md-3 col-lg-3 col-3" id="likesaa" >
            {item.like ? <ThumbUpAltIcon sx={{cursor:'pointer', color:'#17A2B8'}} onClick={()=>handleDislikeBeforeShare(item.id)} /> :
            <ThumbUpAltIcon sx={{cursor:'pointer'}} onClick={()=>handleLikeBeforeShare(item.id)} />}
            </div>

              




              <div className="col-md-6 col-lg-4 col-3" id="likesaa">
                <i className="fa-solid fa-message"></i>
                <span onClick={() => hideAShow(ind, item.id)}>comments</span>
              </div>
              <div
                className="col-md-3 col-lg-3 col-3"
                onClick={() => sharePost(item.id)}
                id="likesaa"
              >
                <i className="fa-solid fa-share"></i>
                <span>share</span>
              </div>
            </div>

            {ShowCommint && commentId == ind ? (
              <Comment
                POstId={item.id}
                setGetCommintData={setGetCommintData}
                GetCommintData={GetCommintData}
                getCommint={() => hideAShow(commentId)}
                ProfileGet={ProfileGet}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default PostBody;
