import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
             
      if(fullname.length && email.length && password.length !== 0){
        
        const resp=await axios.post("http://localhost:3000/register",{fullname, email, password })
        
        // {resp.statusText=="Ok"?(setFullname(""),
        // setEmail(""),
        // setPassword("")):"Something went wront"}
      }else{
        console.log ("All fields are required!")
      }
    
  };

useEffect(()=>{
  registerUser
  
},[])

  return (
    <div className="container">
      <div className="p-4 col-md-6 mx-auto my-4">
        <h2 className="mt-2 mb-4 text-primary">Craete Account</h2>
        <form>
          <div className="form-floating mb-4 text-primary">
            <input
              type="text"
              value={fullname}
              onChange = {(e)=>setFullname(e.target.value)}
              placeholder="Username"
              className="form-control"
            />
            <label htmlFor="username">Full Name</label>
          </div>

          <div className="form-floating mb-4 text-primary">
            <input 
            type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email" 
            className="form-control" />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-4 text-primary">
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              className="form-control"
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="d-grid mb-4">
            <button onClick={registerUser} className="btn btn-primary btn-lg">
              Register
            </button>
          </div>
          <p>
            Already registered? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
