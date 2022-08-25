import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate();

  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");



  

  const loginhandler = () => {
    
    let mail = localStorage.getItem("email");
    let pass = localStorage.getItem("pass");

   
   

    if(emaillog === "" || passwordlog === ""){
      
      toast.warn("Please Fill All Detail")
    }else if(emaillog !== mail || passwordlog !== pass){
     
      toast.error("Please Fill Correct Detail")
     
    }else{
     
      navigate("/home");
    }


  }

  return (
    <div className="bg">
      <div className="login__wrapper">
        <div className="login__section">
          <div>
            <h1>Login</h1>
          </div>

          <div>
            <input
              
              placeholder="Email"
              onChange={(e) => setEmaillog(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
             
              placeholder="Password"
              onChange={(e) => setPasswordlog(e.target.value)}
            />
          </div>

          <div className="signup__btn">
            <button onClick={loginhandler}>Login</button>
          </div>

          <div>
            <h3>Create account? <span onClick={()=>{navigate("/")}}>Sign up</span></h3>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
  
};

export default Login;
