import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ExperienceList from "./ExperienceList";

function HauntedHouseDetail({user}) {
    const {id} = useParams()
    const [house, setHouse] = useState({'visits': []})
    const [hasVisited, setHasVisited] = useState(false)
    const [userExp, setUserExp] = useState(false)

    
    useEffect(()=>{
        fetch(`/haunted_locations/${id}`)
        .then(r => r.json())
        .then(house => setHouse(house));
        // fetch()
        if (user){
            user.visits.forEach(visit => {
                if (visit.haunted_location_id.toString() === id){
                    setHasVisited(true)
                    console.log(user)
                }
                if (visit.experience){
                    console.log('left experience')
                }
            })
        }
    },[])

    return (
        <div>
            <div>
                <h1>{house.name}</h1>
                <img
                src={house.image}
                alt={house.name}
                className="haunted-house-image-detail"
                />
                <p className="house-description">{house.description}</p>
                {hasVisited ?
                userExp? 
                <p>left experience</p> : <p>did not leave experience</p> :
                <p>Not been here</p>
                }
            </div>
            <div>
                <ExperienceList house={house} />
            </div>
        </div>
    );
}

export default HauntedHouseDetail;