import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const {
    email,
    setEmail,
    pass,
    setPass,

    error,
    setError,
    handleLogin,
  } = useContext(AuthContext);

  return (
    <div>
      <div className="error">{error}</div>
      <div className="formDiv">
        <div className="formInputTitle">Email</div>
        <input
          required
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div className="formDiv">
        <div className="formInputTitle">Password</div>
        <input
          required
          type="password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </div>
      <div>
        <button className="formButton" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
