import React,{useEffect} from 'react';
import './App.css';
import Widgets from './Widgets';
import {auth} from "./firebase";
import Sidebar from './Sidebar';
import {useDispatch} from 'react-redux';
import {login,logout,selectUser} from './features/userSlice';
import Header from './Header';
import Feed from './Feed';
import {useSelector} from 'react-redux';
import Login from './Login';
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
   auth.onAuthStateChanged(userAuth=>{
     if(userAuth){
dispatch(login({
  email: userAuth.email,
  uid:userAuth.uid,
  displayName:userAuth.displayName,
  photoUrl:userAuth.photoUrl,
}));
     }
     else{
dispatch(logout())
     }
   });
  }, []);
  return (
<div className="app">
{/*Header*/}
<Header />
{!user ?(<Login />):(
<div className="app__body">
<Sidebar />
{/*App body*/} 
  <Feed />
{/*Feed*/}
<Widgets />
{/*Widgets*/} 
</div>)}
      
    </div>
  );
}

export default App;
