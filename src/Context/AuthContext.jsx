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

  const resetUserStates = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPass("");
    setRePass("");
    setNickname("");
    setError("");
  };

  const handleSignUp = async () => {
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
      resetUserStates();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setError(error.response.data);
    }
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
        pass,
        setPass,
        rePass,
        setRePass,
        handleSignUp,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export { AuthContext };
