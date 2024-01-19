import Button from "../../Components/button/Button";
import React, { useState } from "react";
import axios from "axios";
import { BsCheckLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "email" && password === "password") {
      setLoginError("");
      alert("Login successful!");
    } else {
      setLoginError("Invalid username or password");
    }
  };
const  loged  = async(e)=>{


  try {
 const {data} = await axios.post(`http://localhost:8000/api/user/login`, { email: email, password })
 if(data){
   console.log(data,"newe");
   localStorage.setItem('user', JSON.stringify({ token: data?.token, userId: data?.userId }));
   navigate("/");
  }
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="setEmail">Email:</label>
          <input
            type="text"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {loginError ? <p style={{ color: "red" }}>{loginError}</p> : null}
        <Button onClick={loged} value="submit" className="secNavInpBtn" />{" "}
      </form>
    </div>
  );
}

export default Login;
