import React from 'react';
import NavBar from "./NavBar.js"
import {Link} from "react-router-dom"

const Review = () => {
    let data = [
        {
            "username": "asdf;lkj",
            "review": "this is an example review with word break because the really long review i had before this would not wrap properly because it was one word a b c d e f g", 
            "rating": 5,
            "time": 3
        },

        {
            "username": "a;dslfjad;lfkj",
            "review": "a;dslfja;dslkfj",
            "rating": 3,
            "time": 2
        },

        {
            "username": "ad;sasdf",
            "review": "a;dsk",
            "rating": 3,
            "time": 1
        },
    ]

    let dish = "example dishname"

    let average_rating = data.reduce((c, n) => n.rating + c, 0) / data.length
    average_rating = Math.floor(average_rating)



    let components = []
    for (let entry of data) {
        components.push(UserReview(entry))
    }

    return (  
        <div className="main">
            <NavBar></NavBar>
            <DishInfo dishname={dish} stars={average_rating}></DishInfo>
            {components}
        </div>
    );


}

//TODO formatting
// switch star and review icon
// move username to right align
const DishInfo = (props) => {
    let stars = "";
    for (let i = 0; i < props.stars; i++) {
        stars += String.fromCharCode(9733)
    }

    return (
        <div class="main">
            <div class="flexcenter">
                <div class="reviewcomp">
                    <div class="grid">
                        <div>
                            {props.dishname}
                        </div>

                        <div>
                            <a class="underline">Add Review</a>
                        </div>

                        <p class="star">{stars}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const UserReview = (props) => {
    //https://shripadk.github.io/react/docs/jsx-gotchas.html
    let stars = ""
    for (let i = 0; i < props.rating; i++) {
        stars += String.fromCharCode(9733)
    }
    return (
        <div className="main">
            <div class="flexcenter">
                <div class="reviewcomp">
                    <p class="star">{stars}</p>
                    <p>{props.username}</p>
                    <p>{props.review}</p>
                </div>
            </div>
        </div>
    )
}
 
export default Review;