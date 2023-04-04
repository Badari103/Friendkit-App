import React, { useId } from "react";
import Title from "./Title";
import { friendsObject } from "./friendsObject";
import Card from "./friendsCard";
import "../../../../css/nav/friends.css";


const Friends =()=>{
    const friendIterator= friendsObject.map((friend)=>{return(<Card key={friend.name} value={friend} True={true}/>)});
    return(
        <div>
            <Title value={"Friends"}/>
            <div >{friendIterator}</div>
        </div>
    );
}

export default Friends;