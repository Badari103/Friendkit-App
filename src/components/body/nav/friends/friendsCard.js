import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../../../../css/nav/friends.css";

const Card = (props) => {
    return (
        <div className="friendsCard">
            <div className="fri">
                <img className="friendsImg" src={props.value.img} alt="img" />

                <div className="friendsDescription">
                    <p>{props.value.name}</p>
                    <p>{props.value.about}</p>
                </div>
            </div>
            <div>
                {props.True && < FontAwesomeIcon className="favIcon" icon={faStar}/> }  
            </div>
        </div>
    )
}

export default Card;