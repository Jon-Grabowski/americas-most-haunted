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
        <div class="dropdown">            
            <select onChange={handleChange}>
                <option value=''>Menu</option>
                <option value="home">Home</option>
                <option value="locations">Haunted Locations</option>
                <option value="add">Add New Location</option>
                {/* <option><NavLink exact to="/" className="menu-links">Home</NavLink></option>
                <option><NavLink to='/haunted_houses' className="menu-links">Haunted Locations</NavLink></option>
                <option><NavLink to="/monsterlist" className="menu-links">Add New Location</NavLink></option> */}
            </select>        
        </div>
        {/* <div>
            <NavLink exact to="/" className="nav-links">Home</NavLink>
            <NavLink to='/haunted_houses' className="nav-links">Haunted Locations</NavLink>
            <NavLink to="/monsterlist" className="nav-links">Add New Location</NavLink>
        </div> */}
        <div className='header'>
            <h1>
            America's Most Haunted
            {/* <span className="logo" role="img"> :skull:  </span> */}
            </h1>
        </div>
        <div>
            <NavLink exact to="/login" className="nav-links">Login</NavLink>
            <NavLink to='/signup' className="nav-links">Sign Up</NavLink>
        </div>
    </nav>
    );
}

export default NavBar;