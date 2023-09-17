import React, { useContext } from "react"
import { AuthContext } from "../Context/SignContext"

const SignUp = () => {

    const { firstName, setFirstName, lastName, setLastName, nickName, setNickName, email, setEmail, pass, setPass, rePass, setRePass, handleSignUp, } = useContext(AuthContext)


    return (
        <div>

            <div className="error">

            </div>
            <div className="formDiv">
                <div className="formInputTitle">
                    First Name
                </div>
                <input type="text" value={firstName}
                    onChange={
                        (e) => {
                            setFirstName(e.target.value)
                        }
                    }>
                </input>
            </div>
            <div className="formDiv">
                <div className="formInputTitle">
                    Last Name
                </div>
                <input type="text" value={lastName}
                    onChange={
                        (e) => {
                            setLastName(e.target.value)
                        }
                    }>
                </input>
            </div>
            <div className="formDiv">
                <div className="formInputTitle">
                    Last Name
                </div>
                <input type="text" value={nickName}
                    onChange={
                        (e) => {
                            setNickName(e.target.value)
                        }
                    }>
                </input>
            </div>
            <div className="formDiv">
                <div className="formInputTitle">
                    Email
                </div>
                <input type="text" value={email}
                    onChange={
                        (e) => {
                            setEmail(e.target.value)
                        }
                    }>
                </input>
            </div>


            <div className="formDiv">
                <div className="formInputTitle">
                    Password
                </div>
                <input type="password" value={pass}

                    onChange={
                        (e) => {
                            setPass(e.target.value)
                        }
                    }>
                </input>
            </div>
            <div className="formDiv">

                <div className="formInputTitle">
                    RePassword
                </div>
                <input type="password" value={rePass}

                    onChange={
                        (e) => {
                            setRePass(e.target.value)
                        }
                    }>
                </input>
            </div>
            <div>
                <button className="formButton" onClick={handleSignUp} >
                    Create User
                </button>
            </div>

        </div >


    )
}


export default SignUp
