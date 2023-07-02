import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register=()=>{
    //create a hookd for navigation
    const navigate=useNavigate();

    //define state variable
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnteredPassword:"",
    })

    //handleChange function to update the user state
    const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({
        ...user,
        [name]:value,
    })
    }

    //register function is called when registration button 

    const register=async()=>{
        const {name,email,password,reEnteredPassword}=user;

        //make all fields mandatory
        if(name&&email&&password&&password===reEnteredPassword){
            await axios.post("http://localhost:9002/register",user)
            .then((res)=>alert(res.data.message));
            //once registration is done ,we have to navigate to login page
            navigate("/login");
        }else{
            alert("Invalid Data.Please enter valid credential")
        }
    }

    return(
     <>
     <div className="registerContainer">
        <h1>Register</h1>
        <div className="registerForm">
            {/* input for name,email,password and confirm password  */}
            <input 
            type="text"
            placeholder="Enter your name"
            name="name"
            value={user.name}
            onChange={handleChange}
            />

            <input 
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={handleChange}
            />

            <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
            />
             <input
            type="password"
            placeholder="Enter your Confirm Password"
            name="reEnteredPassword"
            value={user.reEnteredPassword}
            onChange={handleChange}
            />
        </div>
        <div>
            <Button variant="primary" onClick={register}> Register </Button>
            <Button variant="primary" onClick={()=>navigate("/login")}>Login</Button>
        </div>
     </div>
     
     
     </>
    )
}

export default Register;