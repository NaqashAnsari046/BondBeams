import React from 'react';
import { NavLink } from 'react-router-dom';
import './Status.css';

const Status = () => {
    return (
        <div id='setProfile'>
            <div id='setulFeed'>
                <i className="fa-solid fa-user"></i>
                <NavLink to='/myprofile' id='newsfeedbtn'><b>My Profile</b></NavLink>
            </div>

            <div id='setulFeed'>
            <i className="fa-solid fa-people-group"></i>
                <NavLink to='/people'  id='newsfeedbtn'>People</NavLink>
            </div>

            <div id='setulFeed'>
                <i className="fa-solid fa-building"></i>
                <NavLink  to='/company' id='newsfeedbtn' >Companies</NavLink>
            </div>

            <div id='setulFeed'>
            <i className="fa-sharp fa-solid fa-briefcase"></i>
                <NavLink  to='/comming' id='newsfeedbtn' >jobs</NavLink>
            </div>

            <div id='setulFeed'>
            <i className="fa-sharp fa-solid fa-people-group"></i>
                <NavLink  to='/comming' id='newsfeedbtn' >groups</NavLink>
            </div>
            <div id='setulFeed'>
            <i className="fa-solid fa-gear"></i>
                <NavLink  id='newsfeedbtn' to='/settings/general' ><b>setting</b></NavLink>
            </div>

            <div id='setulFeed'>
            <i className="fa-sharp fa-solid fa-briefcase"></i>
                <NavLink to='/comming' id='newsfeedbtn' >Pages</NavLink>
            </div>

            <div id='setulFeed'>
            <i className="fa-solid fa-calendar-days"></i>
                <NavLink to='/comming' id='newsfeedbtn' >message</NavLink>
            </div>

            {/* <div id='setulFeed'>
            <i className="fa-solid fa-thermometer"></i>
                <NavLink>status</NavLink>
            </div> */}
        </div>
    )
}

export default Status