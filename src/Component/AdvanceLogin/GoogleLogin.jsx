import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';
import { useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
const clint="608598140994-oh4c8sdq42ct18t99grvvjsb4gu9tqgs.apps.googleusercontent.com"
function App() {
const Success=(res)=>{
  console.log("login",res.profileObj);
}
const Failure=(res)=>{
  console.log("login faild",res);
}
const logout=(res)=>{
  console.log("logout");
}
useEffect(()=>{
  function start(){
    gapi.client.init({
      clientId:clint,
      scope:""
    })
  }
  gapi.load('client:auth2',start)
})

var accesstoken=gapi.auth
console.log(accesstoken);

  return (
    <div className="App" style={{height:"1.5rem", width:"3rem", borderRadius:"4rem"}}>
  <GoogleLogin
  style={{backgroundColor:"red", height:"1.5rem", width:"2rem", borderRadius:"4rem"}}
    clientId={clint}
    buttonText=""
    onSuccess={Success}
    onFailure={Failure}
    cookiePolicy={'single_host_origin'}
  />,
  
   {/* <GoogleLogout
      clientId={clint}
      buttonText="Logout"
      onLogoutSuccess={logout}
    >    </GoogleLogout> */}


    </div>
  );
}

export default App;
