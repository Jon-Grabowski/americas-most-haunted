import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function HauntedHouseCard( {id, name, image, location, user }) {

    const[hasVisited, setHasVisited] = useState(false)
    const[visitClicked, setVisitClicked] = useState(false)
    const [date, setDate] = useState("")
    const [submitted, setSubmitted] = useState(false)
    

    let history = useHistory()

    useEffect(()=>{
        if (user){
        fetch(`/visit_by_house/${id}`)
        .then(r => r.json())
        .then(visits => {
            if (visits){
                visits.forEach((visit) => {
                    if (visit.user_id === user.id){
                        setHasVisited(true)
                    }
                })
            }     
        })
    }
    },[submitted])

    function handleVisitClick() {
        setVisitClicked(!visitClicked)
    }

    function handleDateChange(e) {
        setDate(e.target.value)
    }

    function handleClick() {
        history.push(`/haunted_houses/${id}`)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newVisit = {
            user_id: user.id,
            haunted_location_id: id,
            date: date
        }
        fetch('/visits', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newVisit)
        })
        .then(r => r.json())
        .then(visit => console.log('hi'))
        setVisitClicked(!visitClicked)
        setSubmitted(!submitted)
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
        {user ? 
        hasVisited ?
        <p>You've Visited Here</p> : <button className="visit-btn" onClick={handleVisitClick}> Have you visited this location?</button>
        : null}
        {visitClicked ?
        <form onSubmit={handleSubmit}>
            <h2>Add Visit</h2>
            <input
                type="text"
                name="date"
                value={date}
                placeholder="When did you Visit?"
                onChange={handleDateChange}
            />
            <input 
                type="submit"
                name="submit"
                value="Create Visit"
            />
        </form>
        : null}
    </div>
    );
    }
    

export default HauntedHouseCard; 
