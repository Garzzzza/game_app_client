import { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loggedUser, setLoggedUser] = useState({});

  const resetAuthStates = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPass("");
    setRePass("");
    setNickname("");
    setError("");
  };

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !pass || !rePass || !nickname) {
      setError("All fields are required!");
      return;
    }

    const userData = {
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      nickname: nickname.toLowerCase(),
      email: email.toLowerCase(),
      password: pass,
      rePassword: rePass,
    };

    try {
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export { AuthContext };
