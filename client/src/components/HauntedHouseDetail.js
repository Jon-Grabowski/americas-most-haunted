import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ExperienceList from "./ExperienceList";
import NewExperienceForm from "./NewExperienceForm";

function HauntedHouseDetail({user}) {
    const {id} = useParams()
    const [house, setHouse] = useState({'visits': []})
    const [hasVisited, setHasVisited] = useState(false)
    const [userExp, setUserExp] = useState(false)
    const [expForm, setExpForm] = useState(false)

    
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
                {user? 
                    hasVisited ?
                    userExp? 
                        <p>Thank You for Leaving an Experience!</p> 
                        : <NewExperienceForm house={house} user={user}/>
                    : <p>You Have Not Visited This Location</p>
                :null
                }
                {expForm ?
                <p>The Form</p> : null}
            </div>
            <div>
                <ExperienceList house={house} setUserExp={setUserExp} user={user}/>
            </div>
        </div>
    );
}

export default HauntedHouseDetail;