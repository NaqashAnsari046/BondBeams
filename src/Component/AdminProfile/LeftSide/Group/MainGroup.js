import React, {useState, useEffect} from "react";
import Group from "./Group";

const MainGroup = () => {

    const [Group1, setGroup1] = useState([]);

    useEffect(()=>{
      Gallaryfun();
    }, [])
  
      //  user local data & token
      let authToken = localStorage.getItem("token");
      let authUser = localStorage.getItem("user");
      authToken = JSON.parse(authToken);
      authUser = JSON.parse(authUser);
      let id = authUser.data.id;
  
    // gallary Get Api Integrate
    const Gallaryfun = async () => {
      let token = "Bearer " + authToken;
      const result = await fetch(`https://api.bondbeam.com/api/user_photo_album/15`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      let data = await result.json();
      data = data.results;
      setGroup1(data);
    };

    // console.log('group data', Group1);


  return (
    <div>
      <Group
        title="Group"
        tit1="senior software engineer & tech loead"
        like="atlanta, georgia"
      />
      <Group title="likes" tit1="Groupon" like="12k followers" />
    </div>
  );
};

export default MainGroup;
