import React, { useEffect, useState } from "react";
//Not currently needed, stretch goal:
import { useFormik } from "formik";
import * as yup from "yup";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    // TODO Finish submit using authorization
    // function handleSubmit(e) {
    //     e.preventDefault()

    // }
    
    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <h2>Log In</h2>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter Username"
                    onChange={handleUsernameChange}
                />
                <input 
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={handlePasswordChange}
                />
                <input 
                    type="submit"
                    name="submit"
                    value="Create New User"
                />
            </form>
        </>
    )
}

export default Login;