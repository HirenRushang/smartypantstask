import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {

  let navigate = useNavigate();


  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


 

  const userrigsterhandler = () => {
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      console.log("its empty")
      toast.warn("Please Fill All Detail")
    }else if(password !== repeatPassword){
      toast.warn("Seems Like Your Password is Not Match With Repeat Password")
    }
     else {
      
      localStorage.setItem("email", email);
      localStorage.setItem("pass", password);

      navigate("/login")
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setRepeatPassword("");
    }
  };

  return (
    <div className="bg">
      <div className="signup__wrapper">
        <div className="signup__section">
          <div>
            <h1>Create a Account</h1>
            <h3>
              Already Have account?{" "}
              <span onClick={()=>{navigate("/login")}}>Sign in</span>
            </h3>
          </div>
          <div>
            <input
              placeholder="FirstName"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="LastName"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          <div className="signup__btn">
            <button onClick={userrigsterhandler}>Sign up</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
