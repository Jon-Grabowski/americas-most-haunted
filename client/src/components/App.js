import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home'
import HauntedHouseList from './HauntedHouseList'
import NewHouseForm from './NewHouseForm'
import HauntedHouseDetail from "./HauntedHouseDetail";
import SignUp from "./SignUp";
import Login from "./Login";





function App() {

  const [houseArray, setHouseArray] = useState([])
  const [user, setUser] = useState(null)
  const [hasVisited, setHasVisited] = useState(false)

  
  useEffect(()=>{
    
    // getUser(); //TO GRAB USER IF IN SESSION
    fetch('/haunted_locations')
    .then(r => r.json())
    .then(houses => setHouseArray(houses))
  },[])

  const getUser = () => {
    fetch("/getuser").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => console.log(user));
      }
    });
  };

  const addNewHouse = (newHouse) => {
    setHouseArray([...houseArray, newHouse])
  }
  
  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        <Route exact path='/'>
          <Home user={user}/>
        </Route>
        <Route exact path='/haunted_houses'>
          <HauntedHouseList houseArray={houseArray} user={user}/>
        </Route>
        <Route path='/haunted_houses/:id'>
          <HauntedHouseDetail user = {user} />
        </Route>
        <Route path='/add_location'>
          <NewHouseForm addNewHouse={addNewHouse}/>
        </Route>
        <Route path='/signup'>
          <SignUp setUser={setUser}/>
        </Route>
        <Route path='/login'>
          <Login setUser={setUser}/>
        </Route>
      </Switch>
    </div>
  )
  
}

export default App;
