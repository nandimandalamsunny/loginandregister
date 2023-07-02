import {BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useEffect, useState } from "react";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";



const App=()=>{

  
  const [loginUser,setLoginUser] = useState(localStorage.getItem('jwt-token'));
 
  return(
   
  <div className="App">
    <Router>
      <Routes>
     
        {/* <Route path="/"   element={ loginUser  ? <Homepage loginUser={loginUser} setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/> */}
        <Route path="/" element={<Homepage loginUser={loginUser} setLoginUser={setLoginUser}/>}/>
        <Route path="/login"   element={<Login setLoginUser={setLoginUser} loginUser={loginUser}/>}/>
        <Route path="/register"   element={<Register/>}/>
        <Route path="/forgotPassword"   element={<ForgotPassword/>}/>
        <Route path="/resetpassword/:token"   element={<ResetPassword/>}/>
      </Routes>
    </Router>
  </div>

  )
}

export default App;
