import {useState} from "react";

function NewHouseForm({addNewHouse}) {
    const [houseName, setHouseName] = useState('')
    const [houseLocation, setHouseLocation] = useState('')
    const [houseDescription, setHouseDescription] = useState('')
    const [houseImage, setHouseImage] = useState('')

    function handleNameChange(e) {
        setHouseName(e.target.value)
    }

    function handleLocationChange(e) {
        setHouseLocation(e.target.value)
    }

    function handleDescriptionChange(e) {
        setHouseDescription(e.target.value)
    }

    function handleImageChange(e) {
        setHouseImage(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newHautedLocation = {
            key: houseName,
            name: houseName,
            location: houseLocation,
            description: houseDescription,
            image: houseImage,
        }
        fetch('/houses', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(newHautedLocation)
        })
            .then(r => r.json())
            .then(newHauntedLocation => addNewHouse(newHauntedLocation))
            e.target.reset()
    }

    return(
        <div>
            <form
                onSumbit={handleSubmit}
            >
                <h3>Visted a House that's not already here?</h3>
                <h3>Add that Haunted Location!</h3>
                <label> Location Name:
                    <input
                        type="text"
                        name="name"
                        onChange={handleNameChange}
                    />
                </label>
                <br />
                <label>Location City and State:
                    <input 
                        type="text"
                        name="location"
                        onChange={handleLocationChange}
                    />
                </label>
                <br />
                <label>Location Description:
                    <input 
                        type="text"
                        name="description"
                        onChange={handleDescriptionChange}
                    />
                </label>
                <br />
                <label>Location Image:
                    <input 
                        type="text"
                        name="image"
                        onChange={handleImageChange}
                    />
                </label>
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="Create New Haunted Location"
                />
            </form>
        </div>
    )
}

export default NewHouseForm;