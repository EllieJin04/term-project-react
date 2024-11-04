import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const AddReview = () => {
    const STAR = String.fromCharCode(9733)

    // there is a better way to do this using react!!
    // i couldnt get anything to work
    const onclkgen = (idx) => {
        return () => {
            let stars = []
            for (let i = 0; i < 5; i++) {
                stars.push(document.getElementById("star" + i))
            }

            stars.forEach((e) => e.classList.remove("star-red"))
            stars.forEach((e) => e.classList.add("star-gray"))

            for (let i = 0; i <= idx; i++) {
                stars[i].classList.remove("star-gray")
                stars[i].classList.add("star-red")
            }

            document.getElementById("rating").value = idx
        }
    } 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate('/review');
    };

    return (  
        <div className="main">
            <NavBar/>

            <div class="flexcenter">
                <h2>Review</h2>
            </div>
            
            <div class="flexcenter">
                <span onClick={onclkgen(0)} id="star0" class="star-gray">{STAR}</span>
                <span onClick={onclkgen(1)} id="star1" class="star-gray">{STAR}</span>
                <span onClick={onclkgen(2)} id="star2" class="star-gray">{STAR}</span>
                <span onClick={onclkgen(3)} id="star3" class="star-gray">{STAR}</span>
                <span onClick={onclkgen(4)} id="star4" class="star-gray">{STAR}</span>
            </div>

            <form onSubmit={handleSubmit}>
                <div class="flexcenter">
                    <textarea class="textbox" placeholder="Comments"></textarea>
                    <input name="rating" type='hidden' id="rating"></input>
                </div>

                <div class="flexcenter">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddReview;