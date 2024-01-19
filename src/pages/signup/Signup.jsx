import React, { useState,useEffect } from "react";
import Button from "../../Components/button/Button";
import axios from "axios";



function Signup() {
    const [signinError, setSigninError] = useState("");
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



      const handleSignup = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
        setSigninError("");
      alert("signup successful!");
    } else {
        setSigninError("Invalid username or password");
    }
};

useEffect(() => {

  axios
    .post(`http://localhost:3000/api/user/signup`)
    .then((res) => {
      console.log("first,res", res);
      console.log("Fetch successful!");
      // setUserCateg(res.data.user);
    })
    .catch((error) => {
      console.error("Fetch failed:", error);
    });
}, []);


return (
    <div>
        
         <h2>signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        {signinError ? <p style={{ color: "red" } }>{signinError}</p>  : null}
        <Button value="submit" className="secNavInpBtn" />{" "}
      </form>
    </div>
  );
}

export default Signup
