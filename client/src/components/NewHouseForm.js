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
        // TODO Fix these .then(s), second one currently just console logs, but needs to connected to other things
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
                <input
                    type="text"
                    name="name"
                    label="Name of Location"
                    onChange={handleNameChange}
                />
                <input 
                    type="text"
                    name="location"
                    label="Where is this located?"
                    onChange={handleLocationChange}
                />
                <input 
                    type="text"
                    name="description"
                    label="Description of Location"
                    onChange={handleDescriptionChange}
                />
                <input 
                    type="text"
                    name="image"
                    label="Image of Location"
                    onChange={handleImageChange}
                />
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