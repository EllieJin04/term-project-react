import React from 'react';
import {Link} from "react-router-dom"

const Review = () => {
    let data = [
        {
            "username": "asdf;lkj",
            "review": "a;slfja;dslkjf;lj;ajdsf;ladsjf", 
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

    let components = []
    for (let entry of data) {
        components.push(UserReview(entry))
    }

    return (  
        <div className="main">
            {components}
        </div>
    );


}

const UserReview = (props) => {
    let stars = ""
    for (let i = 0; i < props.rating; i++) {
        //TODO
        stars += "*"
    }
    return (
        <div className="main">
            <div class="flexcenter">
                <div class="reviewcomp">
                    <h2>{props.username}</h2>
                    <h2>{stars}</h2>
                    <h2>{props.review}</h2>
                </div>
            </div>
        </div>
    )
}
 
export default Review;