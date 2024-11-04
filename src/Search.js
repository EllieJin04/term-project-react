import React from 'react';
import {Link} from "react-router-dom"
import NavBar from './NavBar';

const Search = () => {
    return (  
        <div className="main">
            <NavBar />
            <form action="/review">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder='Enter a dish name:'/>
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>
        </div>
    );
}
 
export default Search;