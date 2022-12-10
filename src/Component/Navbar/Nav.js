import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Pages from "../../ReuseableCode/Pagination/Pages";
import img from "../img/MyProfile/log.jpg";
import user from "../img/MyProfile/user.jfif";
import userProfile from '../img/MyProfile/userProfile.jpg'
import "./Nav.css";

const Nav = () => {
  let navigate = useNavigate();
  const [SearchData, setSearchData] = useState([]);
  const [UserName, setUserName] = useState("User");
  const [userimg, setuserimg] = useState();
  let Profile_pic = localStorage.getItem('Profile_pic');
  Profile_pic = JSON.parse(Profile_pic);
  let username = localStorage.getItem('username');
  username = JSON.parse(username);
  useEffect(() => {
      if(!localStorage.getItem("token")){
        navigate("/signin");
      }
    DataGet();
  setuserimg(Profile_pic);
  // SearchUser()
  },[]);
  
  const searchbtn = () => {
    const backarrow = document.getElementById("backarrow");
    const setiggg = document.getElementById("setiggg");
    const navSearch = document.getElementById("navSearch");
    const search = document.getElementById("search");
    const hidedata = document.getElementById("logo");
    const texticon = document.getElementById("texticonhide");
    const liset = document.getElementById("liset");
    navSearch.style.width = "19rem";
    navSearch.style.marginLeft = "0.6rem";
    liset.style.paddingLeft = "0rem";
    search.style.margin = "0rem";
    search.style.position = "flex";
    search.style.display = "none";
    backarrow.style.display = "block";
    navSearch.style.display = "block";
    setiggg.style.display = "none";
    hidedata.style.display = "none";
    texticon.style.display = "none";
  };


  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);
  


  const DataGet = async () => {
    // let data = await fetch(`http://192.168.100.63:9000/api/user_profile/21`);
    // data = await data.json();
    // console.log(data);
    // console.log("Navbar", data.data.first_name);
    // setUserName(data.data.username);
  };

  
  const LogOut = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("Profile_pic");
    localStorage.removeItem("cover_pic");
    localStorage.removeItem("username");
    // localStorage.clear();
      navigate('/')
      window.location.reload()
  }

 // user search api
  const SearchUser = async (search) =>{
    let searchNew = search.target.value;
      let searchs  = await fetch(`https://api.bondbeam.com/newsfeed/search/?search=${searchNew}`)
      searchs = await searchs.json();
      setSearchData(searchs.results)
      // console.log(searchs);
  }
  // console.log('search data',SearchData);

  return (
    <nav className="navbar navbar-expand-lg" id="setNav">
      <NavLink to='/newsfeed' activeclassname='active'>
        {/* <img src={img} alt="log" id="setiggg" /> */}
        <img src={img} id="setiggg" />
      </NavLink>
      <div id="smallsetIcon">
        <li className="nav-item" id="liset">
          <i
            className="fa-solid fa-magnifying-glass"
            id="search"
            onClick={searchbtn}
          ></i>
          <NavLink className="fa-solid fa-arrow-left" id="backarrow" to='/mainfeedback'></NavLink>
          <input placeholder="Search........" id="navSearch"  />
        </li>
        <li className="nav-item" id="texticonhide">
          <i className="fa-solid fa-message"></i>
        </li>
      </div>
      <span
        id="logo"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src={user} alt="img" /> <i className="fa-solid fa-caret-down"></i>
      </span>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav" id="setul">
          <input type="search" placeholder="Search" aria-label="Search" onChange={SearchUser} />
          <li className="nav-item ">
            <i className="fa-solid fa-newspaper"></i>
            <NavLink to="/newsfeed" className="nav-link text-dark" href="#">
              news
            </NavLink>
          </li>
          <li className="nav-item ">
            <i className="fa-solid fa-briefcase"></i>
            <NavLink to="/comingsoon" className="nav-link text-dark" href="#">
              jobs
            </NavLink>
          </li>
          <li className="nav-item ">
            <i className="fa-solid fa-book-open-reader"></i>
            <NavLink to="/comingsoon" className="nav-link text-dark" href="#">
              learn
            </NavLink>
          </li>
          <li className="nav-item ">
            <i className="fa-solid fa-wallet"></i>
            <NavLink to="/comingsoon" className="nav-link text-dark" href="#">
              wallet
            </NavLink>
          </li>
          <li className="nav-item ">
            <i className="fa-solid fa-message"></i>
            <NavLink to="/comingsoon" className="nav-link text-dark" href="#">
              messages
            </NavLink>
          </li>

        <li className="nav-item dropdown" id='setliBorder'>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {userimg ? <img src={userimg} alt='user' /> : <img src={userProfile} alt='user' />}  
            {username}
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" id="setnavdrop">
            <li>
              <NavLink className="dropdown-item fa-solid fa-gear" id="setDropSeeting" to='settings/general'>
              <h6> Setting & Privacy</h6>
              <h6><i className="fa-solid fa-caret-right"></i></h6>
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item fa-regular fa-circle-info" id="setDropSeeting">
              <h6> help & sport</h6>
              {/* <h6><i className="fa-solid fa-caret-right"></i></h6> */}
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item fa-solid fa-moon" id="setDropSeeting">
              <h6> display & accessibilty</h6>
              {/* <h6><i className="fa-solid fa-caret-right"></i></h6> */}
              </NavLink>
            </li>

            <li>
              <NavLink className="fa-solid fa-right-from-bracket setlogout" id="setDropSeeting" onClick={LogOut} >
              <h6> LogOut</h6>
              {/* <h6><i className="fa-solid fa-caret-right"></i></h6> */}
              </NavLink>
            </li>
            
          </ul>
        </li>


                    
        </ul>
      </div>
      {/* <Pages data={SearchData} /> */}
    </nav>
  );
};

export default Nav;
