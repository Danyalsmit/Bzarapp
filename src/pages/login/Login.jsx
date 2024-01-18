import Button from "../../Components/button/Button";
import React, { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signinError, setSigninError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setLoginError("");
      alert("Login successful!");
    } else {
      setLoginError("Invalid username or password");
    }
  }
  const handleSignup = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
        setSigninError("");
      alert("signup successful!");
    } else {
        setSigninError("Invalid username or password");
    }
};

  return (
    <div>
        { false  ? <h2>Login</h2>:<h2>signnup</h2>}
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
        {loginError ? <p style={{ color: "red" } }>{loginError}</p> : loginError ? <p style={{ color: "red" } }>{signinError}</p> : null}
        <Button value="submit" className="secNavInpBtn" />{" "}
      </form>
    </div>
  );
}

export default Login;
