import React from "react";

function HauntedHouseCard( {id, name, image, location }) {
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
        <button> More details! </button>
            {/* <p>{visits} Visited </p>
        <button className="visited-btn"> Visited {"X"}</button> */}
    </div>
    );
    }
    

export default HauntedHouseCard; 
