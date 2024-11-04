import React, { useState } from "react";
import useFetch from "./useFecth";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

const Home = () => {
    const {data: todaysDish, isPending, error} = useFetch("http://localhost:8080/dish/today");
    console.log(todaysDish);

    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (button) => {
        setActiveButton(button);
    
        // scroll to the designated section
        if (button === "lunch") {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
          document.querySelector(".lunch-section").scrollIntoView({ behavior: "smooth" });
        } else if (button === "dinner") {
          document.querySelector(".dinner-section").scrollIntoView({ behavior: "smooth" });
        }
    };

    // dummy data for testing
    // let data = [
    //     {
    //         "dishname": "dishname1",
    //         "rating": 5
    //     },
    //     {
    //         "dishname": "dishname2",
    //         "rating": 4
    //     },
    //     {
    //         "dishname": "dishname3",
    //         "rating": 3
    //     },
    //     {
    //         "dishname": "dishname4",
    //         "rating": 2
    //     },
    //     {
    //         "dishname": "dishname5",
    //         "rating": 1
    //     },
    // ];

    // let components = [];
    // for (let entry of data) {
    //     components.push(TodayDish(entry));
    // }

    return (  
        <div className="main">
            <NavBar />
            <div className="favorite-dish">
                <div className="title">Favorite Dish:</div>
            </div>
            <div className="buttons">
                <button 
                    onClick={() => handleClick("lunch")}
                    className={activeButton === "lunch" ? "button active" : "button"}
                >
                    Lunch dishes
                </button>
                <button 
                    onClick={() => handleClick("dinner")}
                    className={activeButton === "dinner" ? "button active" : "button"}
                >
                    Dinner dishes
                </button>
            </div>
            <div className="lunch-section">
                <div className="menu-name">Lunch Dishes Menu</div>
                {error && <div>{error}</div>}
                {isPending && <div>Loading today's dishes...</div>}
                {/* {todaysDish && <DishList todaysDish={todaysDish.lunch} />} */}
                {todaysDish && <TodayDish todaysDish={todaysDish.lunch}/>}
                {/* {components} */}
            </div>
            <div className="dinner-section">
                <div className="menu-name">Dinner Dishes Menu</div>
                {error && <div>{error}</div>}
                {isPending && <div>Loading today's dishes...</div>}
                {todaysDish && <TodayDish todaysDish={todaysDish.dinner} />}
                {/* {components} */}
            </div>
        </div>
    );
}

const TodayDish = (props) => {
    //https://shripadk.github.io/react/docs/jsx-gotchas.html
    let stars = ""
    for (let i = 0; i < 4; i++) {
        stars += String.fromCharCode(9733)
    }

    const todaysDish = props.todaysDish;
    if (!todaysDish || !Array.isArray(todaysDish)) {
        return null;
    }
    console.log("Todays' dish:", todaysDish);
    return (
        <div className="dish-list">
            {todaysDish.map((item, index) => (
                <div className="dish" key={index}>
                    <p>{item}</p>
                    <p>Average rating: {stars}</p>
                    <p><Link to="/review">Reviews</Link></p>
                </div>
            ))}
        </div>
    )
}
 
export default Home;