import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
    const {token} = useParams()
    const [password, setPassword] = useState("")
    const [verify,setVerify] = useState("")
    const navigate = useNavigate()
    const verifyToken = async (req,res)=>{
        await axios.get(`http://localhost:9002/resetpassword/${token}`)
          .then((res)=>{
            // console.log(res.data)
            setVerify(res.data.message)
          })
    }

    const handleSubmit =async () =>{
        try {
            setPassword('')
            await axios.post(`http://localhost:9002/newpassword/${token}`,{"password":password})
            .then((res)=>{
            alert(res.data.message)
            navigate("/login")
            })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }


    useEffect(()=>{
        verifyToken()
        },[])
        console.log(verify);
  return (
    <>
    {
        verify ==="Token verified Successfully" ? <>
        {verify}
        <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>handleSubmit()}>New password</button>
        </>
        : 
        <>
        {verify}
        </>
    }
    </>
  )
}

export default ResetPassword