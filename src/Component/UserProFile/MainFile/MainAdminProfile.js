import React, { useEffect } from 'react';
import Block from '../RightSide/Block/MobBlock';
import Exp from '../RightSide/Experience/Exp';
// import Edu from '../RightSide/Education/Edu'
import './Main.css';
import Skill from '../RightSide/Skill/Skill';
import Lan from '../RightSide/Language/Lan';
import Certi from '../RightSide/Certificate/Certifi';
import Pro from '../RightSide/Project/Pro';
import Post from '../RightSide/PostPage/Post';
import Album from '../LeftSide/Album/Album';
import IMGBlock from '../LeftSide/ImgBlock/IMGBlock';
import Group from '../LeftSide/Group/Group';
import Product from '../LeftSide/Product/Product';
import MainInfoAbout from '../RightSide/Info&About/MainInfoAbout';


const Main = () => {
    useEffect(()=>{
        DataGet();
    })

    const DataGet = async ()=>{
        let data = await fetch(`http://192.168.100.63:9000/api/user_profile/21`);
        data = await data.json();
        console.log(data);
        console.log(data.data.first_name);
    }
 
    
    return (
        <div className='container-fluid setMain'>
            <div className='row'>
                <div className='col-md-8 col-lg-8 col-12' id='ProfileRighte'>     {/* RightSide Component */}
                    <Block />
                    <MainInfoAbout />
                    <Exp /> 
                    {/* <Edu />    Education Data Pass by props */}
                    {/* <Skill />
                    <Lan />
                    <Certi />
                    <Pro /> */}
                    {/* <Post /> */}
                </div>
                <div className='col-md-4 col-lg-4'>  {/* LeftSide Data */}                                      
                    <IMGBlock title='Followers(99)' />              {/* Data Pass by Props */}
                    <IMGBlock title='Followers(200)' />
                    <Album />
                    {/* Component resueable */}
                    <Group title='Group' tit1='senior software engineer & tech loead' like='atlanta, georgia' />
                    <Group title='likes' tit1='Groupon' like='12k followers' />
                    <Product />
                </div>
            </div>
          
        </div>
    )
}

export default Main