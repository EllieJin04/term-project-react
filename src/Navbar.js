import React from 'react';
import {Link, useLocation} from "react-router-dom"

const NavBar = () => {
    const location = useLocation();
    const login = "Log in";
    return (  
        <nav className="navbar">
            <div className="menu">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Menu</Link>
            </div>
            <div className="search">
                <Link to="/search" className={location.pathname === "/search" ? "active" : ""}>Search</Link>
            </div>
            <div className="login">
                {/* TODO: Make log in and log out dynamically changed based on user's status*/}
                <Link to="/login">{login}</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;