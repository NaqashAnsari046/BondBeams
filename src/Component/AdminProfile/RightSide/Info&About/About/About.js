import React, {useState, useEffect} from 'react';
import './About.css';
import TextHead from '../TextBlock/TextHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutPost from './AboutPost/AboutPop';

const About = ({ProfileGet,about}) => {

  const [About, setAbout] = useState([]);

  useEffect(()=>{
    AboutFun();
    ProfileGet()
  },[])


   //  user local data & token
   let authToken = localStorage.getItem("token");
   let authUser = localStorage.getItem("user");
   authToken = JSON.parse(authToken);
   authUser = JSON.parse(authUser);
   let id = authUser.data.id;

   // Profile Get Api Integrate
   const AboutFun = async () => {
    let token = "Bearer " + authToken;
    const result = await fetch(
      `https://api.bondbeam.com/api/user_profile/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    let data = await result.json();
    data = data.data;
    setAbout(data);
    }

    // console.log('about', About.about);
  return (
    <div id='setmaintext'>

        <TextHead title='about' icon={<AboutPost AboutFun={AboutFun}  /> } />
        <div id='setabout'>
            <p>{About.about}</p>
        </div>
    </div>
  )
}

export default About