import NavBar from "./Navbar";
const Home = () => {
    return (  
        <div className="main">
        <NavBar />
            <div className="favorite-dish">
                <div className="title">Favorite Dish:</div>
            </div>
            <div className="todays-dish">
                <div className="title">Today's Dish:</div>
            </div>
        </div>
    );
}
 
export default Home;