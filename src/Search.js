import React from 'react';
import {Link} from "react-router-dom"

const Search = () => {
    return (  
        <div className="main">
            <form action="/review">
                <input type="text" className="search-input"/>
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
}
 
export default Search;