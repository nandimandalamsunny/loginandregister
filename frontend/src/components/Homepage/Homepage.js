import React, { useEffect } from "react";
import {Button } from "react-bootstrap";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
const Homepage=({setLoginUser,loginUser})=>{
  const navigate=useNavigate();

const handleLogout = () =>{
  setLoginUser(localStorage.removeItem("jwt-token"))
  navigate('/login')
}


useEffect(()=>{
  if(!loginUser){
    navigate("/login")
  }
},[loginUser])
console.log(loginUser);
    return(
      <>
      <div>
        <h1>This is Homepage</h1>
      </div>
    <Button onClick={()=>handleLogout()}>Logout</Button>
      
      </>
    )
}

export default Homepage;