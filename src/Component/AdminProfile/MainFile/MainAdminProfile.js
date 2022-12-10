import React, { useEffect } from 'react';
import Block from '../RightSide/Block/MobBlock';
import Exp from '../RightSide/Experience/Exp';
import './Main.css';
import Skill from '../RightSide/Skill/Skill';
import Certi from '../RightSide/Certificate/Certifi';
import Pro from '../RightSide/Project/Pro';
import Post from '../RightSide/PostPage/Post';
import Album from '../LeftSide/Album/Album';
import IMGBlock from '../LeftSide/ImgBlock/IMGBlock';
import Group from '../LeftSide/Group/Group';
import Product from '../LeftSide/Product/Product';
import MainInfoAbout from '../RightSide/Info&About/MainInfoAbout';
import MainBlockNow from '../LeftSide/ImgBlock/MainBlockNow';
import MainGroup from '../LeftSide/Group/MainGroup';
import PostBody from '../RightSide/PostPage/PostBody';
import AdminProfile from './AdminProfile';


const Main = () => {
    
    return (
        <div className='container-fluid setMain'>
            <div className='row'>
                <div className='col-md-8 col-lg-8 col-12' id='ProfileRighte'>    
                    <Block />
                    <MainInfoAbout />
                    <Exp /> 
                    {/* <Edu />     */}
                    <Skill />
                    {/* <Lan /> */}
                    <Certi />
                    <Pro />
                    <Post />
                
                </div>
                <div className='col-md-4 col-lg-4'>  {/* LeftSide Data */}                                      
                    {/* <IMGBlock title='Followers(99)' />              Data Pass by Props
                    <IMGBlock title='Followers(200)' /> */}
                    <MainBlockNow />
                    <Album />
                    {/* Component resueable */}
                    <MainGroup />
                    <Product />
                </div>
            </div>
          
        </div>
    )
}

export default Main