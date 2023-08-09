import React from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
    let history = useHistory()

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
        {/* <div className='nav-bar-header'>  */}
                <h1 className="title">America's Most Haunted</h1>            
        {/* </div> */}
        <div className='nav-bar-links'>
            <NavLink exact to="/login" className="nav-links">Login</NavLink>
            <NavLink to='/signup' className="nav-links">Sign Up</NavLink>
        </div>
    </nav>
    );
}

export default NavBar;