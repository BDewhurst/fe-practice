import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { changeRating, getRestaurantById } from "../../../api";
import "../css/RatingSystem.css"
import {AiFillStar} from "react-icons/ai"

function RatingSystem ({setRestaurant}) {
  const { restaurantId } = useParams();
const [rating, setRating] = useState(0)

const handleClick = (newRating) => {
  setRating(newRating);
  changeRating(restaurantId, newRating).then(() => {

    getRestaurantById(restaurantId).then((restaurantData) => {
 setRestaurant(restaurantData)
    });
  }), [setRestaurant, restaurantId];
};

    return (
        <div id="rating-system">
        <h2>Please leave a rating...</h2>
        <div id="stars">
        <AiFillStar onClick={() => handleClick(1)}/>
        <AiFillStar onClick={() => handleClick(2)}/>
        <AiFillStar onClick={() => handleClick(3)}/>
        <AiFillStar onClick={() => handleClick(4)}/>
        <AiFillStar onClick={() => handleClick(5)}/>
        </div>
      </div>
    )
}

export default RatingSystem