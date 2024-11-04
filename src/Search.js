import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // https://reactrouter.com/en/main/hooks/use-navigate
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate('/review');
    };

    const handleClick = async (dishname) => {
        // Send a POST request
        try {
            const response = await fetch(`/review/${dishname}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dishname })
            });
            if (response.ok) {
                // Navigate to the review page with specific dishname
                navigate(`/review${dishname}`);
            } else {
                console.error('Failed to search a dish');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    // dummy data for testing
    const dishes = [
        "Hot Agave Garlic Glazed Tofu ",
        "steamed rice",
        "steamed broccoli",
        "Jamaican-style Jerk Chicken",
        "Coconut Milk Basmati Rice",
        "Corn",
        "French Fries",
        "Crab Cakes",
        "Sauteed Heart of Palm and Roasted Tomatoes ",
        "Steamed Corn and Peas",
        "Spicey Cowboy Beef Chili",
        "Cornbread",
        "Roasted Garlic Broccoli",
        "Cheese Pizza",
        "Pepperoni Pizza",
        "Veggie Supreme with Vegan Cheese Pizza",
        "Creamy Mushroom",
        "Ancho Pork Stew",
        "Blueberry Melon",
        "Garlic Herb Roasted Chicken with Blistered Tomatoes",
        "Smashed Potatoes ",
        "Steamed Carrots"
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(e.target.value);
        const results = dishes.filter(dishes => dishes.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(results);
    };

    console.log(searchResults);

    return (  
        <div className="main">
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder='Enter a dish name:' value={inputValue} onChange={handleInputChange}/>
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>

            {/* Render the results based on what users typed on the search bar */}
            {searchResults.length > 0 && <div className='search-tip'>Guess you want to search: </div>}
            {searchResults.length > 0 && (
                <div className="search-results">
                    {searchResults.map((result, index) => (
                        <Link to="/review" className="dish" key={index}>
                            {result}
                        </Link>
                         // TODO: when we have real data in the review page, we should change <Link> above to the following code
                        // <div
                        //     className="dish"
                        //     key={index}
                        //     onClick={() => handleClick(result)}
                        // >
                        //     {result}
                        // </div>
                    ))}
                </div>
            )}
        </div>
    );
}
 
export default Search;