import React from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const getClassName = (path) => {
    return currentPath === path ? "PageTab active" : "PageTab";
  };

  const { token, handleLogOut } = useContext(AuthContext);

  return (
    <div className="NavBar">
      <div className="PageTab"></div>
      <Link className={getClassName("/")} to="/">
        Home
      </Link>
      {!token && (
        <Link className={getClassName("/signup")} to="/signup">
          Sign Up
        </Link>
      )}
      {!token && (
        <Link className={getClassName("/login")} to="/login">
          Login
        </Link>
      )}
      {token && (
        <Link className={getClassName("/scores")} to="/scores">
          Scores
        </Link>
      )}
      {token && (
        <Link className={getClassName("/igame")} to="/igame">
          Igame
        </Link>
      )}
      {token && (
        <Link className={getClassName("/kgame")} to="/kgame">
          Kgame
        </Link>
      )}
      {token && (
        <div className="PageTab" onClick={handleLogOut}>
          LogOut
        </div>
      )}
    </div>
  );
};

export default NavBar;
