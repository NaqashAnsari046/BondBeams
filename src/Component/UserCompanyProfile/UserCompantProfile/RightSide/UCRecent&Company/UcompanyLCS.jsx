import React, { useState, useEffect } from "react";


const UcompanyLCS = () => {
    const [LikeDataGet, setLikeDataGet] = useState([]);
  useEffect(() => {
    LikeGet();
  }, []);

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  let userData = JSON.parse(user);

  // like  Get
  const LikeGet = async (id) => {
    // console.log('idd,,,,', id);
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
    // console.log("Get like", likessGet);
    setLikeDataGet(likessGet.data);

    // setGetCommintData(likePost.results);
  };

  console.log('LikeDataGet', LikeDataGet);

  return (
    <div className="bg-info">
      <div id="setCommintLike">
        <h5 onClick={() => LikeGet()}>
          <i class="fa-solid fa-thumbs-up"></i> like
        </h5>
        <h5>
          <span>comments</span>
          <span className="pl-2">shares</span>
        </h5>
      </div>
    </div>
  );
};

export default UcompanyLCS;
