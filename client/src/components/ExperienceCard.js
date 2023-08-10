
function ExperienceCard({visit}) {
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
        </div>
    )
}

export default ExperienceCard;