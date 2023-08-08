import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home'
import HauntedHouseList from './HauntedHouseList'
import NewHouseForm from './NewHouseForm'




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
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/haunted_houses'>
          <HauntedHouseList houseArray={houseArray}/>
        </Route>
        {/* <Route path='/add_location'>
          <NewHouseForm/>
        </Route> */}
      </Switch>
    </div>
  )
  
}

export default App;
