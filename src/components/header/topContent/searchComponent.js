import React from "react";
import "../../../css/topcomponent/topComponent.css";
import { Search } from 'react-feather';

const SearchComponent =()=>{
    return(
        <div className="searchbar">
        <Search className="iconSearch"/>
        <input className="searchbarInput" type="search" placeholder="Search"/>
        </div>
    )
}

export default SearchComponent;