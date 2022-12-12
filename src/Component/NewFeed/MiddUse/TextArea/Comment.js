import React, { useState, useEffect } from "react";
import "./TextBlock.css";
import img from "../../../img/FeedNew/cons4.jpg";

const TextBlock = ({ POstId,GetCommintData, getCommint ,setGetCommintData}) => {
  console.log('grt', GetCommintData);
  const [CommintSendUpdate, setCommintSendUpdate] = useState([]);
  const [Comments, setComments] = useState({
    comment: "",
    post_id: POstId,
  });


  // console.log('post id sss',POstId);
  useEffect(() => {
    // GetCommint();
  }, []);

  // event
  const Cemment = (e) => {
    const { name, value } = e.target;

    setComments((PreVal) => {
      return {
        ...PreVal,
        [name]: value,
      };
    });
  };

  // console.log('data', GetCommintData);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  let id = authUser.data.id;

  // comint send
  const CommentSend = async (id) => {
    const { comment, post_id } = Comments;
    let token = "Bearer " + authToken;
    let data = await fetch(`https://api.bondbeam.com/newsfeed/post_comment/`, {
      method: "POST",
      body: JSON.stringify({ comment, post_id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    data = await data.json();
    console.log(data.data);
    
    if(data.status==true){
      // getCommint(id)
      setCommintSendUpdate(comment)
      setGetCommintData([...GetCommintData,data.data])

    }
    setComments({comment:"",
    post_id:POstId,
  })
  };
  // SendCommintUp(CommintSendUpdate)


  console.log("commint", CommintSendUpdate);

  return (
    <div id="textbottom">
      <div id="setinnerPOst">
        <img src={img} />
        <input
          type="text"
          placeholder="enter your comment"
          name="comment"
          value={Comments.comment}
          onChange={Cemment}
        />
        <i onClick={()=>CommentSend(POstId)} className="fa-solid fa-paper-plane"></i>
      </div>

      {/* //get commint */}
      <div className="container-fluid" id="commitMain">
        <div >
          {GetCommintData.map((item, ind) => {
            return (
              <div className="d-flex pt-4 " key={ind}>
                <div className="" id="commintIMG">
                  <img src={img} alt="img" />
                </div>
                <div  id="setcomminttext">
                  <h3>{item.user.username}</h3>
                  <h4>{item.comment}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
