import React, { useState } from "react";
import useFetch from "./useFecth";
import NavBar from "./NavBar";
import DishList from "./DishList";

const Home = () => {
    const {data: todaysDish, isPending, error} = useFetch("/dish/today");

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
                {todaysDish && <DishList todaysDish={todaysDish.lunch} />}
            </div>
            <div className="dinner-section">
                <div className="menu-name">Dinner Dishes Menu</div>
                {error && <div>{error}</div>}
                {isPending && <div>Loading today's dishes...</div>}
                {todaysDish && <DishList todaysDish={todaysDish.dinner} />}
            </div>
        </div>
    );
}
 
export default Home;