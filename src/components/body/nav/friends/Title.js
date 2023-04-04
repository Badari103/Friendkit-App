import React from "react";
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import "../../../../css/nav/friends.css";

const Title =(props)=>{
    return(
        <div className="title">
            <h5 className="titleName">{props.value}</h5>
            <IoEllipsisVerticalSharp  className="verticalDots"/>
        </div>
    );
}

export default Title;