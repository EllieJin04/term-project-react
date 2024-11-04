import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const Search = () => {
    // https://reactrouter.com/en/main/hooks/use-navigate
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate('/review');
    };
    return (  
        <div className="main">
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder='Enter a dish name:'/>
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>
        </div>
    );
}
 
export default Search;