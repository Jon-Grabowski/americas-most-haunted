import ExperienceCard from "./ExperienceCard";

function ExperienceList({house}) {
    console.log (house)
    const experienceList = house.visits.map((visit) => {
        return(
            <ExperienceCard key={visit.id} visit={visit}/>
        )
    }) 

    return(
        <div>
            {experienceList}
        </div>
    )
}

export default ExperienceList;