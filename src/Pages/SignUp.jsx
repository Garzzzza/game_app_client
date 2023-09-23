import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    nickname,
    setNickname,
    email,
    setEmail,
    picture,
    setPicture,
    pass,
    setPass,
    rePass,
    setRePass,
    handleSignUp,
    error,
    setError,
  } = useContext(AuthContext);

  return (
    <div>
      <div className="error"></div>
      <div className="error">{error}</div>
      <div className="formDiv">
        <div className="formInputTitle">First Name</div>
        <input
          required
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
      </div>
      <div className="formDiv">
        <div className="formInputTitle">Last Name</div>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
      </div>
      <div className="formDiv">
        <div className="formInputTitle">Nickname</div>
        <input
          required
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        ></input>
      </div>
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
      <div className="formClause">
        <div className="formInputTitle">picture:</div>
        <input
          required
          type="file"
          onChange={(e) => setPicture(e.target.files[0])}
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
        ></input>
      </div>
      <div className="formDiv">
        <div className="formInputTitle">RePassword</div>
        <input
          required
          type="password"
          value={rePass}
          onChange={(e) => {
            setRePass(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <button className="formButton" onClick={handleSignUp}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default SignUp;
