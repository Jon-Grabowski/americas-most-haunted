import React from "react";

function HauntedHouseCard( {id, name, image, location, description }) {
    return (
    <div className="haunted house card">
        <h2>{name}</h2>
        <h4>{location}</h4>
        <h4>{description}</h4>
        <img
            src={image}
            alt={name}
            className="haunted house image"
        />
            {/* <p>{visits} Visited </p>
        <button className="visited-btn"> Visited {"X"}</button> */}
    </div>
    );
    }
    

export default HauntedHouseCard; 
