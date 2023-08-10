import ExperienceCard from "./ExperienceCard";

function ExperienceList({house}) {
    console.log (house)
    const experienceList = house.visits.map((visit) => {
        return(
            <h3>{visit.date}</h3>
        )
    }) 

    return(
        <div>
            {experienceList}
        </div>
    )
}

export default ExperienceList;