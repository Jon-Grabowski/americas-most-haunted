import HauntedHouseCard from './HauntedHouseCard'

function HauntedHouseList({houseArray, user, setHasVisited, hasVisited}) {
    const houseComponents = houseArray.map(house => {
        return(
            <HauntedHouseCard
            key={house.id}
            id={house.id}
            name={house.name}
            location={house.location}
            description={house.description}
            image={house.image}
            user={user}
            />
        )
    })
    return (
        <div className='house-card-container'>
            {houseComponents}
        </div>
    )
}

export default HauntedHouseList