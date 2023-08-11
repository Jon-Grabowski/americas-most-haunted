import React from "react";
import About from "./About"
import HauntedHouseList from "./HauntedHouseList";
import HauntedHouseCard from "./HauntedHouseCard";
import HauntedHouseDetail from "./HauntedHouseDetail";

function Home() {
    return (
    <div>
        <div>
            <div className="about-section"><About/></div>
        </div>
    </div>    
    );
}

export default Home;

