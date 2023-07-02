import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
const Login=({setLoginUser, loginUser})=>{
    const navigate=useNavigate();
    //define state variable with useState hook
    const [user,setUser]=useState({
        email:"",
        password:"",
    })
    

    //create handleChange function to update the user state when user take an input
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value,
        })
    }

    //login function when user clicked on button
    const login=async()=>{
  //send a post request to server using user credentials
        try {
            await axios.post("http://localhost:9002/login",user).then((res)=>{
            alert(res.data.message);//getting the data->Login Successful
            //update the login user state with response data
            if(res.status === 200){
                setLoginUser(res.data.token);
                localStorage.setItem('jwt-token',res.data.token);
                navigate('/')     
            }
        });
        } catch (error) {
            alert(error)
        }
    }
   
 
  
    return(
      <>
      <div className="loginContainer">
        <h1>Login</h1>
        <div className="loginForm">
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
        </div>
        <div>
        <Button variant="primary" onClick={login}>
            Login
        </Button>
        <Button variant="primary" onClick={()=>navigate('/register')}>
            Register
        </Button>
        <Button variant="primary" onClick={()=>navigate('/forgotpassword')}>
            Forgot password
        </Button>
        </div>
      </div>
      </>
    )
}
export default Login;