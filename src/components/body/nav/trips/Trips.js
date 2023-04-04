import React, { useId } from "react";
import Title from "../friends/Title";
import { trips } from "./tripsObject";
import Card from "../friends/friendsCard";
import "../../../../css/nav/trips.css";

const Trips=()=>{
    const tripInterator=trips.map((trip)=>{return(<Card key={trip.name} value={trip}/>)})
    return(
        <div>
            <Title value={"Trips"}/>
            {tripInterator}
        </div>
    );
}

export default Trips;