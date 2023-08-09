import React from "react";
import { useHistory } from "react-router-dom";
function HauntedHouseCard( {id, name, image, location }) {

    let history = useHistory()

    function handleClick() {
        history.push(`/haunted_houses/${id}`)
    }
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
            {/* <p>{visits} Visited </p>
        <button className="visited-btn"> Visited {"X"}</button> */}
    </div>
    );
    }
    

export default HauntedHouseCard; 
