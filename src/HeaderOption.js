import { Avatar } from '@material-ui/core';
import React from 'react'
import {useSelector} from 'react-redux';
import {selectUser}  from './features/userSlice';
import './HeaderOption.css';
function HeaderOption({avatar,Icon,title,onClick}) {
const user=useSelector(selectUser);
return (
<div onClick={onClick} className="headertOption">
{Icon && <Icon className="headerOption__icon" />}
{avatar && (
<Avatar src={user?.photoUrl}className="headerOption__icon abc">
{user?.email[0]}</Avatar>)}
<h4 classname="headerOption__title">{title}</h4>
</div>
)  
}

export default HeaderOption;
 