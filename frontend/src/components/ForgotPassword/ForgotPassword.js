import axios from 'axios';
import React, { useState } from 'react'

const ForgotPassword = () => {
  const [email,setEmail] = useState("")


  const handleSubmit=async()=>{
    try {
      console.log(email);
      await axios.post("http://localhost:9002/forgotpassword",{email}).then((res)=>{
        alert(res.data.message,"message");//getting the data->Login Successful
        //update the login user state with response data
    })
      
    } catch (error) {
      console.log(error);
        alert(error)
    }
}
  return (
    <>
    <div>ForgotPassword</div>
    <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <button onClick={()=>handleSubmit()}>reset password</button>
    </>
  )
}

export default ForgotPassword