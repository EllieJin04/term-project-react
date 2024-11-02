import useFetch from "./useFecth";

const Home = () => {
    const {data: todaysDish, isPending, error} = useFetch("/dish/today");

    return (  
        <div className="main">
            <NavBar />
            <div className="favorite-dish">
                <div className="title">Favorite Dish:</div>
            </div>
            <div className="todays-dish">
                <div className="title">Today's Dish:</div>
                {error && <div>{error}</div>}
                {isPending && <div>Loading today's dishes...</div>}
                {todaysDish && <DishList blogs={todaysDish}/>}
            </div>
        </div>
    );
}
 
export default Home;