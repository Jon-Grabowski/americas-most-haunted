import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'

function HauntedHouseDetail() {
    const {id} = useParams()
    const[house, setHouse] = useState({})

    useEffect(()=>{
        fetch(`/haunted_locations/${id}`)
        .then(r => r.json())
        .then(house => setHouse(house))
    },[])

    return (
        <div>
            <h1>{house.name}</h1>
            <img
            src={house.image}
            alt={house.name}
            className="haunted-house-image-detail"
            />
            <p className="house-description">{house.description}</p>
        </div>
    );
}

export default HauntedHouseDetail;