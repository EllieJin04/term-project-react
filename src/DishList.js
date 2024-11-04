import React from 'react';
import { Link } from 'react-router-dom';

const DishList = (todaysDish) => {
    return (  
        <div className="dish-list">  
            {todaysDish.map((dish) => (
                <div className="dish">
                    <p>{dish.dishName}</p>

                </div>
            ))}
        </div>
    );
}
 
export default DishList;