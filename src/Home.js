import useFetch from "./useFecth";
import NavBar from "./NavBar";
import DishList from "./DishList";

const Home = () => {
    const {data: todaysDish, isPending, error} = useFetch("/dish/today");

    return (  
        <div className="main">
            <NavBar />
            <div className="favorite-dish">
                <div className="title">Favorite Dish:</div>
            </div>
            <div className="buttons">
                <button onClick={() => document.querySelector('.lunch-section').scrollIntoView({ behavior: 'smooth' })}>
                    Lunch dishes
                </button>
                <button onClick={() => document.querySelector('.dinner-section').scrollIntoView({ behavior: 'smooth' })}>
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