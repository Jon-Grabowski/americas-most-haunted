import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";

function NewExperienceForm({house, user}) {

    const history = useHistory()

    const [body, setBody] = useState('')
    const [scaryLevel, setScaryLevel] = useState(null)

    

    const visitIdArray = house.visits.map((visit) => {
        if (visit.user.id === user.id) {
            console.log(visit.id)
            return visit.id 
        }
    }) 
    function handleChange(e){
        setScaryLevel(e.target.value)
    }

    function handleBodyChange(e) {
        setBody(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        let newExp = {
            body: body,
            rating: scaryLevel,
            visit_id: visitIdArray[1]
        }
        console.log(newExp)
        fetch('/experiences', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newExp)
        }).then(r => r.json()).then(exp => console.log(exp))
        // history.go(0)
    }
    return(
        <div>
            <p>You've been here before! Please share your experience:</p>
            <form onSubmit={handleSubmit}>
                <input
                        type="text"
                        name="body"
                        value={body}
                        placeholder="Share your experience!"
                        onChange={handleBodyChange}
                    />
                <select className="scary-select" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input 
                    type="submit"
                    name="submit"
                    value="Add Experience"
                /> 
            </form>
        </div>
    )
}

export default NewExperienceForm