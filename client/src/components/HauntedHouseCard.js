import React from "react";
import { useHistory } from "react-router-dom";
function HauntedHouseCard( {id, name, image, location, user }) {

    let history = useHistory()

    function handleClick() {
        history.push(`/haunted_houses/${id}`)
    }

    // function createVisit(){
    //     const newVisit = {
    //         username: username,
    //         password: password,
    //         email: email,
    //         age: age
    //     }
    //     fetch('/users', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(newVisit)
    //     })
    //     .then(r => {
    //         if (r.ok) {
    //             r.json().then((newVisit) => {
    //                 console.log(newVisit)
    //             })
    //         }
    //     })
    // }
    
    return (
    <div className="haunted-house-card">
        <h2>{name}</h2>
        <h4>{location}</h4>
        <img
            src={image}
            alt={name}
            className="haunted-house-image"
        />
        <br/>
        <button onClick={handleClick}> More details! </button>
        {user ? 
        <button onClick={() => console.log('click')}> I've visited here! </button>
        : null}
            {/* <p>{visits} Visited </p>
        <button className="visited-btn"> Visited {"X"}</button> */}
    </div>
    );
    }
    

export default HauntedHouseCard; 
