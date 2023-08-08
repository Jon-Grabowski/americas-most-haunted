import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HauntedHousePage from './HauntedHousePage'


function App() {

  useEffect(()=>{
    fetch('/haunted_locations')
    .then(r => r.json())
    .then(houses => console.log(houses))
  },[])
  
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path='/haunted_houses'>
          <HauntedHousePage/>
        </Route> 
      </Switch>
    </div>
  )
  
}

export default App;
