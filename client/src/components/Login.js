import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//Not currently needed, stretch goal:


function Login({setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [badLogin, setBadLogin] = useState(false)

    let history = useHistory()

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    // TODO Finish submit using authorization
    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(r => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    setBadLogin(false)
                    history.push('/')
                })
            }
            else {
                setBadLogin(true)
            }
        })
    }
    
    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <h2>Log In</h2>
                <input className="username"
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter Username"
                    onChange={handleUsernameChange}
                />
                <input className="password"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={handlePasswordChange}
                />
                <input className="login"
                    type="submit"
                    name="submit"
                    value="Login"
                />
            </form>
            {badLogin ? <p>Incorrect username or password</p>: null}
        </>
    )
}

export default Login;