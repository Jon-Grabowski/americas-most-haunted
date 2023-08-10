import { useState } from "react";



function ExperienceCard({visit}) {
    // const[ editExperience , setEditExperience ] = useState("")
    // const[ deleteExperience, setDeleteExperience ] = useState ("")

    function handleEdit(e) {
            // setEditExperience(e.target.value)
            // console.log(e.target.value)
        }
    function handleDelete() {
        console.log(visit.experience.id)
        fetch(`/experiences/${visit.experience.id}`, {
            method: "DELETE",
        })
    }
    
// function handleDelete() {
//     fetch(`/experiences/${visit.experience.id}`, {
//         method: "DELETE",     
//     }) 
//     .then((r)=> r.json())
//     .then(() => console.log("HI!"))
//     }

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
            <div className="edit-experience-btn">
                <button onClick = {handleEdit}>Edit your experience 🦇 </button>
            </div>
            <div className="delete-experience-btn">
                <button onClick = {handleDelete}>Delete your experience 🦇 </button>
            </div>
        </div>
    )
}

export default ExperienceCard;