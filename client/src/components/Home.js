import React from "react";
import About from "./About"
import HauntedHouseList from "./HauntedHouseList";
import HauntedHouseCard from "./HauntedHouseCard";
import HauntedHouseDetail from "./HauntedHouseDetail";

function Home() {
    return (
    <body>
        <div>
            <div className="list-of-locations">
            Sallie House<br></br>
            Amityville Horror House<br></br>
            RMS Queen Mary<br></br>
            The Ohio State Reformatory
            </div>
            <div className="about-section"><About/></div>
        </div>
    </body>    
    );
}

export default Home;

