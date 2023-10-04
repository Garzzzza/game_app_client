import { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState(null);
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loggedUser, setLoggedUser] = useState({});

  const resetAuthStates = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPass("");
    setRePass("");
    setNickname("");
    setError("");
    setPicture(null);
  };

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !pass || !rePass || !nickname) {
      setError("All fields are required!");
      return;
    }
    try {
      const userData = new FormData();
      userData.append("firstName", firstName.toLowerCase());
      userData.append("lastName", lastName.toLowerCase());
      userData.append("nickname", nickname.toLowerCase());
      userData.append("email", email.toLowerCase());
      userData.append("picture", picture);
      userData.append("password", pass);
      userData.append("rePassword", rePass);
      const response = await axios.post(
        process.env.REACT_APP_SERVER_URL + "/users",
        userData
      );
      resetAuthStates();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setError(error.response.data);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await axios.post(
        process.env.REACT_APP_SERVER_URL + "/users/login",
        { email: email, password: pass }
      );
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
      resetAuthStates();
      setError("");
      navigate("/");

      getLoggedUser();
    } catch (error) {
      console.log(error.response);
      setError(error.response.data);
    }
  };

  async function getLoggedUser() {
    try {
      const res = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/users/loggeduser",
        { headers: { Authorization: "Bearer " + token } }
      );

      setLoggedUser(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleLogOut = async () => {
    navigate("/");
    setToken("");
    localStorage.clear();
    setLoggedUser({});
  };

  return (
    <AuthContext.Provider
      value={{
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
        handleLogin,
        loggedUser,
        getLoggedUser,
        token,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export { AuthContext };
