import React,{useEffect, useState} from 'react';
// import userProfile from '../../../img/MyProfile/userProfile.png'
import Profileimg from '../../../../Component/img/MyProfile/Profile.png'
import userCover from '../../../../Component/img/MyProfile/userCover.jpg'
import work from '../../../img/MyProfile/work1.png'
import './Profile.css'
import Status from '../Status/Status';
import { json } from 'react-router-dom';

const Profile = () => {
    const [UserName, setUserName] = useState([]);
    const [UserImg, setUserImg] = useState();
    const [CoverImg, setCoverImg] = useState();

    let userimg = localStorage.getItem('Profile_pic')
    let coverimg = localStorage.getItem('cover_pic')
    userimg = JSON.parse(userimg)
    coverimg = JSON.parse(coverimg)
    useEffect(()=>{
        setUserImg(userimg);
        setCoverImg(coverimg);
    }, [])

    useEffect(()=>{
    setUserName(auth.data)
    }, [])
    let auth = localStorage.getItem('user');
    auth = JSON.parse(auth)

    return (
        <>
            <div id='imgFeed'>
                {userimg ? <img src={userimg} alt='New Feed' /> : <img src={userCover } alt='New Feed' />}
                
            </div>
            <div id='imglog'>
            {userimg ? <img src={coverimg} alt='New Feed' /> : <img src={Profileimg} alt='New Feed' />}
                {/* <img src={UserImg} alt='New Feed' /> */}
                <h2>{UserName.first_name} {UserName.last_name}</h2>
                <p>{UserName.email}</p>
            </div>
            <div id='checkbook'>
                <span>online status</span>
                <span className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                </span>
            </div>
            <Status />
        </>
    )
}

export default Profile