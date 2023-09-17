import { useState, createContext } from "react";
import axios from "axios"

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rePass, setRePass] = useState("")
    const [nickName, setNickName] = useState("")

    const handleSignUp = async () => {
        if (pass !== rePass) {
            alert('Passwords do not match!');
            return;
        }

        // Data to be sent to the backend
        const userData = {
            firstName: firstName,
            lastName: lastName,
            nickName: nickName,
            email: email,
            password: pass
        };

        try {
            const response = await axios.post('/users', userData);


        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <AuthContext.Provider
            value={{
                firstName, setFirstName, lastName, setLastName, nickName, setNickName, email, setEmail, pass, setPass, rePass, setRePass, handleSignUp,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider
export { AuthContext }