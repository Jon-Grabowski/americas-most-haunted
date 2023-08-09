import {useState} from "react";
import { useHistory } from "react-router-dom";
// Not currently needed, stretch goal:


function SignUp({setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    

    let history = useHistory()

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleAgeChange(e) {
        setAge(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newUser = {
            username: username,
            password: password,
            email: email,
            age: age
        }
        fetch('/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        // TODO Fix everything here with .then(1st) and .then(2nd)
        // FIXME Mainly the issue is that the user is currently just console logged and errors are not handled
        .then(r => {
            if (r.ok) {
                r.json().then((newUser) => {
                    setUser(newUser)
                    history.push('/')
                })
            }
            else {
            }
        })
        e.target.reset()
    }

    
    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <h2>Create A New User</h2>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Create Username"
                    onChange={handleUsernameChange}
                />
                <input 
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Create Password"
                    onChange={handlePasswordChange}
                />
                <input 
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={handleEmailChange}
                />
                <input 
                    type="text"
                    name="age"
                    value={age}
                    placeholder="Enter Age"
                    onChange={handleAgeChange}
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

export default SignUp;