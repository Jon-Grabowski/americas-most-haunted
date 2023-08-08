import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HauntedHouseList from "./HauntedHouseList";


function App() {

  const [houseArray, setHouseArray] = useState([])

  useEffect(()=>{
    fetch('/haunted_locations')
    .then(r => r.json())
    .then(houses => setHouseArray(houses))
  },[])
  
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path='/haunted_houses'>
          <HauntedHouseList houseArray={houseArray}/>
        </Route> 
      </Switch>
    </div>
  )
  
}

export default App;
