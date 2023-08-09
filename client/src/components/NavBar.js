import React from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar({user, setUser}) {
    let history = useHistory()

    const handleClick = () => {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => {
            setUser(null);
        });
      };

    function handleChange(e) {
        const selection = e.target.value
        console.log(selection)
        if (selection === 'home') {
            history.push('/')
        }else if (selection === 'locations'){
            history.push('/haunted_houses')
        }else if (selection === 'add') {
            history.push('/add_location')
        }

    }


    return (
    <nav>
        <div className="nav-bar-dropdown">            
            <select onChange={handleChange}>
                <option value=''>Menu</option>
                <option value="home">Home</option>
                <option value="locations">Haunted Locations</option>
                <option value="add">Add New Location</option>
            </select>        
        </div>
            <h1 className="title">America's Most Haunted</h1>
        {user ?
        <div className='nav-bar-links'>
        <h3 id='nav-user-name'>Welcome, {user.username}</h3>
        <NavLink to='/' className="nav-links" onClick={handleClick}>Log Out</NavLink>
        </div>
        :<div className='nav-bar-links'>
            <NavLink exact to="/login" className="nav-links">Login</NavLink>
            <NavLink to='/signup' className="nav-links">Sign Up</NavLink>
        </div>
        }
    </nav>
    );
}

export default NavBar;