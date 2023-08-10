import ExperienceCard from "./ExperienceCard";

function ExperienceList({house}) {
    console.log (house)
    const experienceList = house.visits.map((visit) => {
        if (visit.experience) {
            return(
                <ExperienceCard key={visit.id} visit={visit}/>
            )
        }
    }) 

    return(
        <div>
            {experienceList}
        </div>
    )
}

export default ExperienceList;