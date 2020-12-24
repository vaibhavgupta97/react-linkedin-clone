import React from 'react'
import {Avatar} from '@material-ui/core';
import './Sidebar.css';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import GroupIcon from '@material-ui/icons/Group';
function Sidebar() {
const user= useSelector(selectUser);
return (
        <div className="sidebar">
<div className="sidebar__top">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnxt8as-oDtV5HPaD62S1LUUIgdAeL0v_gw&usqp=CAU" alt=""/>
<Avatar src={user?.photoUrl} className="sidebar__avatar">
{user.email[0]}</Avatar>
<h2>{user.displayName}</h2>
<h4>{user.email}</h4>            
</div>
<div className="sidebar__stats">
<div className="sidebar__stat"> 
<p>Who Viewed You</p>
<p className="sidebar__statNumber">2,543</p>
</div>
<div className="sidebar__stat">
<p>Views on Posts</p>
<p className="sidebar__statNumber">1,203</p>
</div>
</div>
<div className="sidebar__bottom">
<p>Recent</p>
<div className="sidebar__recentItem">
<span className="sidebar__hash">#</span>
<p>Reactjs</p></div>
<div className="sidebar__recentItem">
<span className="sidebar__hash">#</span>
<p>Javascript</p></div>
<div className="sidebar__recentItem">
<span className="sidebar__hash">#</span>
    <p>Web development</p></div>
    <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>UI</p></div>
    <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>Programming</p></div><div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>Design</p></div>


 <div className="sidebar__bottom2">
<p>Groups</p>
<div className="sidebar__recentItem">
    <span className="sidebar__group"><GroupIcon /></span>
    <p>Spring Users</p></div>
    <div className="sidebar__recentItem">
    <span className="sidebar__group"><GroupIcon /></span>
    <p>Data Science</p></div>
    <div className="sidebar__recentItem">
    <span className="sidebar__group"><GroupIcon /></span>
    <p>Data Mining</p></div>
    <div className="sidebar__recentItem">
    <span className="sidebar__group"><GroupIcon /></span>
    <p>IEEE</p></div>
    <div className="sidebar__recentItem">
    <span className="sidebar__group"><GroupIcon /></span>
    <p>Hackers</p></div><div className="sidebar__recentItem">
    <span className="sidebar__group"><GroupIcon /></span>
    <p>Design patterns</p></div>
    </div>


    <div className="sidebar__bottom2">
<p>Followed Hashtags</p>
<div className="sidebar__recentItem">
    <span className="sidebar__group">#</span>
    <p>Javascript</p></div>
    <div className="sidebar__recentItem">
    <span className="sidebar__group">#</span>
    <p>careers</p></div>
    <div className="sidebar__recentItem">
    <span className="sidebar__group">#</span>
    <p>jobseekers</p></div>
    <div className="sidebar__recentItem">
    <span className="sidebar__group">#</span>
    <p>reactjs</p></div>
    </div>
    {/*{recentItem("Reactjs")}
            {recentItem("Javascript")}
            {recentItem("Web development")}
            {recentItem("Programming")}
    {recentItem("design")}*/}
            </div>
        </div>
    )
}

export default Sidebar
