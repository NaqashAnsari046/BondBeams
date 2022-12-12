import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainAdminProfile from "./Component/AdminProfile/MainFile/MainAdminProfile";
import Nav from "./Component/Navbar/Nav";
import WellCome from "./Component/WelComePage/WellCome";
import MainFeedNews from "./Component/NewFeed/MainNewFeed/MainFeedBack";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./Component/SignPage/SignUp/SignUp";
import SignIn from "./Component/SignPage/SignIn/SignIn";
import Verification from "./Component/SignPage/Verification/Verification";
import MangNav from "./Component/Navbar/MangNav";
import DTSetting from "./Component/DeskTopSetting/DTSetting";
import Notify from "./Component/DeskTopSetting/Notify/Notify";
import MainPeoplePage from "./Component/People/MainPeoplePage";
import ProfileSetting from "./Component/DeskTopSetting/Profile/ProfileSetting";
// import SkillData from "./Component/DeskTopSetting/Skill&Exp&Pro/Skill/Skill2/SkillData";
import Skill1 from "./Component/DeskTopSetting/Skill&Exp&Pro/Skill/Skill1/Skill1";
import DeskTopProfile from "./ReuseableCode/DeskTopSignIn/LeftSide/DeskTopProfile/DeskTopProfile";
import GSetting from "./Component/DeskTopSetting/GeneralSetting/GeneralSetting";
import Privacy from "./Component/DeskTopSetting/Privacy/Privacy";
import Profile from "./Component/DeskTopSetting/Profile/ProfileSetting";
import UProVerify from "./Component/DeskTopSetting/ProfileVeification/UProVerify";
import Password from "./Component/DeskTopSetting/CPassword/Cpassword";
import ManagSession from "./Component/DeskTopSetting/ManagSession/ManagSession";
// import Skill2 from "./Component/DeskTopSetting/Skill/ReuseCode/SkillReuseable";
import Skill2 from "./Component/DeskTopSetting/Skill&Exp&Pro/Skill/SkillMain";
import SkillSmall from "./Component/DeskTopSetting/Skill&Exp&Pro/Skill/Skill1/SkillSmall";
import TwoFect1 from "./Component/DeskTopSetting/TwoFectorVerification/TowFector1/TwoFec1";
import TwoFect2 from "./Component/DeskTopSetting/TwoFectorVerification/TwoFector2/TwoFect2";
import UBlock from "./Component/DeskTopSetting/UserBlock/UBlock";
import DelAccount from "./Component/DeskTopSetting/DelAccout/DelAccount";
// import Data from "./ReuseableCode/Date/Data";
import NewBox from "./Component/NewFeed/MiddUse/FedBox/NewBox";
import AboutPost from './Component/AdminProfile/RightSide/Info&About/About/AboutPost/AboutPop'
// import EduAdd from './Component/AdminProfile/RightSide/Education/Popup/EduPUT'
import SkillAdd from "./Component/AdminProfile/RightSide/Skill/SkillPopup/SkillAdd";
import SkillPut from "./Component/AdminProfile/RightSide/Skill/SkillPopup/SkillPut";
import CertificateAdd from "./Component/AdminProfile/RightSide/Certificate/CertificateAdd/CertificateAdd";
import AdminProfile from "./Component/AdminProfile/MainFile/AdminProfile";
import ExpPUT from "./Component/AdminProfile/RightSide/Experience/ExperiencePop/ExpPUT";
import PostBody from "./Component/AdminProfile/RightSide/PostPage/PostBody";
import PostGallary from "./Component/AdminProfile/RightSide/PostPage/PostGallary/PostGallary";
import ImgUpload from './Component/NewFeed/MiddUse/header/fileupload/ImgUpload'
import Rana from "./Component/NewFeed/MiddUse/header/fileupload/Rana";
import FimnalIMG from "./Component/NewFeed/MiddUse/header/fileupload/FimnalIMG";
import FinalIMG from "./Component/NewFeed/MiddUse/header/fileupload/FinalIMG";
import PostGallay1 from "./Component/AdminProfile/RightSide/PostPage/PostGallary/PostGallay1";
import SettingExp from "./Component/DeskTopSetting/Skill&Exp&Pro/Experince/SettingExp";
import SettingPro from "./Component/DeskTopSetting/Skill&Exp&Pro/Project/SettingPro";
import TwoFect3 from "./Component/DeskTopSetting/TwoFectorVerification/TwoFector3/TwoFect3";
import Forget1 from './Component/DeskTopSetting/ForgetPassword/Forget1/Forget1'
import Forget2 from './Component/DeskTopSetting/ForgetPassword/Forget2/Forget2'
import Coming from "./ReuseableCode/ComingSoon/Coming";
import { gapi } from 'gapi-script'
import GoogleLogins from "./Component/SignPage/Google/GoogleLogin";
// import UserProfile from "./ReuseableCode/UserProfile/MainVisitUser/UserVisitProfile";
import UserVisitProfile from "./ReuseableCode/UserVisitProfile/MainVisitUser/UserVisitProfile";
import NoRoute from "./Component/ErrorPage/NoRoute";
import UCompanyPro from "./Component/UserCompanyProfile/UserCompantProfile/UCompanyPro";
import FaceBoook from "./Component/AdvanceLogin/FaceBoook";
import GoogleLogin from "./Component/AdvanceLogin/GoogleLogin";
import ExpTest from "./Component/AdminProfile/RightSide/Experience/ExperiencePop/ExpTest";
import MUI from './ReuseableCode/MUI/MUI'
import jwtDecode from 'jwt-decode';
let clientId =
  "233617417166-1v5f6fov7ijsf425ekr0r27kb2m3ab7p.apps.googleusercontent.com";

function App({ ExpVisitApp }) {
  const [SkillData, setSkillData] = useState([]);
  const [NavM, setNavM] = useState(false);
  const [user, setUser] = useState({})

  console.log(user);
  // const [ExpvisitTwo, setExpvisitTwo] = useState();
  // console.log('visit two app', ExpvisitTwo);
  
  const navigate = useNavigate()
  
  
  const handleCallbackResponse = (response) => {
    console.log('Encoded JWT ID Token: ', response.credential);
    var userObject = jwtDecode(response.credential)
    setUser(userObject)
    document.getElementById('signInDiv').hidden = true;
    setNavM(true)
  }

  const handleSignout = (event) => {
    setUser({})
    document.getElementById('signInDiv').hidden = false;
    setNavM(false)
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse
    })
    window.google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme:'outline', size:'large'}
    )
    window.google.accounts.id.prompt()
    // google_global
  }, []);

  useEffect(() => {
    
  
    function start() {
      gapi.client.init({
        ClientId: clientId,
        scope: ''
      })
    };

    // console.log('client:auth2', start);
  }, [])


  function UserData(UserSkillList) {
    setSkillData(UserSkillList);
  }

  //  user local data & token
  let authToken = localStorage.getItem("token");
  let authUser = localStorage.getItem("user");
  authToken = JSON.parse(authToken);
  authUser = JSON.parse(authUser);

  useEffect(() => {
    if (authUser) {
      if (authUser.status == true) {
        setNavM(authUser.status)
      }
    }
  }, [authUser])




  //  if(authUser.status == true){
  //      setNavM(authUser.status)
  //  }

  // let ExpvisitTwoa = ExpvisitTwo.length > 0 && <UserProfile ExpData={ExpvisitTwo} />


  return (
    <div>
      {NavM ? <MangNav handleSignout={handleSignout} /> : ''}
      <Routes>
        {/* <Route path="/" element={<MangNav />} /> */}
        {/* <Route path="skillreuseable"  element={<SkillReuseable SkillData={UserData} />}/> */}
        
  
{
  NavM ? (<><Route path="/googlelogin" element={<GoogleLogin />} />
  {/* <Route path="/userprofile" element={<UserProfile />} /> */}
  <Route path="/userprofile" element={<UserVisitProfile />} />
  {/* <Route path="/nav" element={<Nav />} /> */}
  <Route path="/facebook" element={<FaceBoook />} />
  {/* <Route path="/mainnav" element={<MangNav />} /> */}


  {/* small Setting routing */}
  <Route path="/general" element={<GSetting />} />
  <Route path="/notification" element={<Notify />} />
  <Route path="/profile" element={<Profile />} />
  {/* <Route path="/verification" element={<UProVerify />} /> */}
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/password" element={<Password />} />
  <Route path="/sessions" element={<ManagSession />} />

  <Route path="/skillsmall" element={<Skill2 />} />
  <Route path='/verify/:id' element={<SkillSmall />} />

  <Route path="/Authentication" element={<TwoFect1 />} />
  <Route path="/Authentications/:id" element={<TwoFect2 />} />
  <Route path="/userblocks" element={<UBlock />} />
  <Route path="/deleteaccount" element={<DelAccount />} />






  {/* AdminProfile */}

  <Route path="/myprofile" element={<AdminProfile />} />
  {/* <Route path="/exptest" element={<ExpTest />} /> */}
  <Route path="/mui" element={<MUI />} />

  {/* news feed */}
  
  <Route path="/newsfeed" element={<MainFeedNews />} />
  <Route path="/postbody" element={<PostBody />} />

    {/* sign in route */}
  {/* <Route path="/signup" element={<SignUp />} />
  <Route path="/signin" element={<SignIn setIsAuth={setIsAuth} />} />
  <Route path='/verification' element={<Verification />} />
  <Route path='/forget' element={<Forget1 />} />
  <Route path='/user_reset_password/:id/:id/' element={<Forget2 />} /> */}
  <Route path='/imgupload' element={<ImgUpload />} />
  <Route path='/rana' element={<Rana />} />
  <Route path='/imgs' element={<FimnalIMG />} />
  <Route path='/imgf' element={<FinalIMG />} />
  <Route path='/post1' element={<PostGallay1 />} />
  <Route path='/comingsoon' element={<Coming />} />





 {/* User Company routes */}
 
  <Route path='/company' element={<UCompanyPro />} />

  {/* People Route */}

  <Route path='/people' element={<MainPeoplePage />} />
 

  {/* Routing */}

  <Route path="/settings/" element={<DeskTopProfile />} id='helojnb'>

    <Route path="general" element={<GSetting />} />
    <Route path="notification" element={<Notify />} />
    <Route path="profile" element={<Profile />} />
    <Route path="privacy" element={<Privacy />} />
    <Route path="verification" element={<UProVerify />} />
    <Route path="password" element={<Password />} />
    <Route path="sessions" element={<ManagSession />} />

    <Route path="skill" element={<Skill2 />} />
    <Route path=':id' element={<Skill1 />} />

    <Route path="experience" element={<SettingExp />} />
    <Route path="project" element={<SettingPro />} />


    <Route path="authentication/" element={<TwoFect1 />} />
    <Route path="authentications/:id" element={<TwoFect2 />} />
    <Route path="entercode/:id" element={<TwoFect3 />} />
    <Route path="userblock" element={<UBlock />} />
    <Route path="delete-account" element={<DelAccount />} />


  </Route>


  {/* Setting DeskTop  */}
  {/* <Route path='/desktopseting/' element={<DeskTopSetting />}> */}
  {/* <Route path='desktopsign' element={<MainDeskTopSign />} /> */}
  {/* <Route path='visibility' element={<MainVisibilty />} /> */}
  {/* </Route> */}
  {/* <Route path='/communication' element={<MainCommunication />} />
  <Route path='/advertising' element={<MainDeskAdvertising />} />
  <Route path='/addmail' element={<MainAddEmail />} />
  <Route path='/seureemailadd' element={<MainSecureEmail />} />
  <Route path='/addphone' element={<MainAddPhone />} />
  <Route path='/mainfphone' element={<MainFPhone />} />
  <Route path='/changepassword' element={<MainChange />} />
  <Route path='/twostepverify' element={<MainVerify />} />
  <Route path='/twostepverify2' element={<MainVerify2 />} />
  <Route path='/twostepverify3' element={<MainVerify3 />} />
  <Route path='/activesession' element={<MainActiveSession />} />
  <Route path='/rememberdevice' element={<MainRememberDevice />} />
  <Route path='/profileview' element={<MainProfileView />} />
  <Route path='/followvisibilty' element={<MainFollowVisiblity />} /> */}

<Route path="/*" element={<MainFeedNews />} /></>):(<><Route path="/" element={<WellCome />} /><Route path="/signin" element={<SignIn />} />
  <Route path='/verification' element={<Verification />} />
  <Route path='/forget' element={<Forget1 />} />
  <Route path='/user_reset_password/:id/:id/' element={<Forget2 />} /></>)
}


        
      </Routes>
      {/* <MainAdminProfile /> Store My Profile Desktop All Component */}
      {/* <MainFeedBack />     Store News Fields All Component */}
      {/* <MainDeskTop />  Store All Component DeskTop Setting */}
      {/* <MainVisibilty /> Store All Component DeskTop Setting Visibility  */}
      {/* <MainCommunication /> Store All Component DeskTop Setting Advertising */}
      {/* <MainDeskAdvertising /> */}

      {/* <WellCome /> */}
    </div>
  );
}

export default App;
