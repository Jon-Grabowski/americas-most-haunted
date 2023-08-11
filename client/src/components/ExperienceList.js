import ExperienceCard from "./ExperienceCard";

function ExperienceList({house, user, setUserExp}) {

    
    const experienceList = house.visits.map((visit) => {
        if (visit.experience) {
            return(
                <ExperienceCard key={visit.id} visit={visit} user={user} setUserExp={setUserExp}/>
            )
        }
    }) 
    // if (experienceList.length > 0) {
    //     console.log(experienceList)
    //     console.log('this true')
    // }else {
        // console.log(experienceList)
        // console.log('this is false')
    // }
    return(
        // <div>
        //     {experienceList.length > 0 ? experienceList : <h3>No Experiences Shared</h3>}
        // </div>
            <div>
                {experienceList}
            </div>
    )
}

export default ExperienceList;