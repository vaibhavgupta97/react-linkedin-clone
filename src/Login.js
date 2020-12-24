import React,{useState} from 'react'
import "./Login.css";
import {auth} from "./firebase";
import {useDispatch} from 'react-redux';
import{login} from './features/userSlice';
function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const[profilePic,setProfilePic]=useState("");
    const dispatch=useDispatch();
    const register=()=>{
     
if(!name){
    return alert("Please enter your name")
}
auth.createUserWithEmailAndPassword(email,password)
.then((userAuth)=>{
userAuth.user
.updateProfile({
    displayName:name,
    photoURL:profilePic,
})
.then(()=> {
    dispatch(
        login({
        email: userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:name,
        photoUrl:profilePic,
    })
    );
}); 
    })
    .catch((error)=>alert(error));
};
    const logInToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(
                login({
                email: userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoPic,
               })
            );  
        }).catch((error)=>alert(error));
    };
    return (
        <div className="login">
            <img src="https://www.cbronline.com/wp-content/uploads/2016/06/linkedin.jpg" alt=""/>
<form>
<input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Full name (required)" />
<input  value={profilePic} onChange={e=>setProfilePic(e.target.value)}placeholder="Profile pic URL (optional)" type="text"/>
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email (required)" type="email"/>
<input value={password} onChange={e=>setPassword(e.target.value)}placeholder="Password" type="password"/>   
<button type="submit"  onClick={logInToApp}>Sign In</button>
</form>
<p>Not a member? 
<span className="login__register" onClick= {register}> Register Now</span></p>
</div>
    )
}

export default Login;
