import React, {useState, useEffect} from "react";
import { SRLWrapper } from "@bimbeo160/simple-react-lightbox";
import '../../../Component/AdminProfile/LeftSide/Album/Img.css'
import Pagination from '../../../ReuseableCode/Pagination/Paginations.jsx'

import { useLocation } from "react-router-dom";

const UVGallary = () => {
    const [GallarySet, setGallarySet] = useState([]);
    const [UserId, setUserId] = useState();
    
  const [currentPage, setcurrentPage] = useState(1);
  const [PostPrePages, setPostPrePages] = useState(4);
      
    let location = useLocation();
    useEffect(()=>{
      setUserId(location.state.id);
      Gallaryfun();

    }, [UserId])
  
  
      //  user local data & token
      let authToken = localStorage.getItem("token");
      let authUser = localStorage.getItem("user");
      authToken = JSON.parse(authToken);
      authUser = JSON.parse(authUser);
      let id = authUser.data.id;
  
    // gallary Get Api Integrate
    const Gallaryfun = async () => {
      let token = "Bearer " + authToken;
      const result = await fetch(`https://api.bondbeam.com/api/user_photo_album/${UserId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      let data = await result.json();
      data = data.results;
      setGallarySet(data);
    //   console.log('no', data);
    };


    
  const LastPostIndex = currentPage * PostPrePages
  const firstPostIndex = LastPostIndex - PostPrePages
  const currentPosts = GallarySet.slice(firstPostIndex,LastPostIndex)
  // console.log('gallary',GallarySet);

  return (
    <SRLWrapper>
      <div className="row" id="setMainalbum">
        {GallarySet.map((item,ind) => {
          return (
            <div className="col-md-6 col-lg-6 col-12" id="SetImgAlbum" key={ind}> 
              <img
                src={item.image}
                style={{ width: "100%",}}
              />
            </div>
          );
        })}
      </div>
      <Pagination totalPosts={GallarySet.length} PostPrePages={PostPrePages} setCurrentPage={setcurrentPage} />

    </SRLWrapper>
  );
};

export default UVGallary;
