import {useState} from "react";
import { useHistory } from "react-router-dom";




function ExperienceCard({visit, user}) {
    const [body, setBody] = useState("")
    const [rating, setRating] = useState("")
    const [showForm, setShowForm] = useState(false)

    const handleShowForm = () => {
        setShowForm(!showForm)
    }

    let history = useHistory()


    function handleBodyChange(e) {
        setBody(e.target.value)
    }

    function handleRatingChange(e) {
        setRating(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const new_experience = {
            body: body,
            rating: rating
        }
        console.log(new_experience)
        fetch(`/experiences/${visit.experience.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(new_experience)
        })
        history.go(0)
    }


    function handleDelete() {
        console.log(visit.experience.id)
        fetch(`/experiences/${visit.experience.id}`, {
            method: "DELETE",
        })
        history.push('/haunted_houses')
    }
    

    return(
        <div className='ex-card-container'>
            <div className='ex-card-header'>
                <p>{visit.user.username} visited on {visit.date}</p>
            </div>
            <div className='ex-card-body'>
                <p>{visit.experience.body}</p>
            </div>
            <div className='ex-card-rating'>
                <p>Scary Rating: {visit.experience.rating} Screams!</p>
            </div>
            <div>
                <div className="edit-experience-btn">          
                    <button onClick = {handleShowForm}>Edit your experience 🦇 </button>
                    {showForm ?
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="body"
                                placeholder="Edit Body"
                                onChange={handleBodyChange}
                            />
                            <br />
                            <select className="scary-select" onChange={handleRatingChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <input 
                                type="submit"
                                name="submit"
                                value="Edit"
                            />
                        </form> : null}
                </div>
                <div className="delete-experience-btn">
                    <button onClick = {handleDelete}>Delete your experience 🦇 </button>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;