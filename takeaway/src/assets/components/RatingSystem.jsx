import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { changeRating, getRestaurantById } from "../../../api";


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
        <div>
        <h2>Rating System</h2>
        <p>Current Rating: {rating}</p>
        <button onClick={() => handleClick(1)}>1 Star</button>
        <button onClick={() => handleClick(2)}>2 Stars</button>
        <button onClick={() => handleClick(3)}>3 Stars</button>
        <button onClick={() => handleClick(4)}>4 Stars</button>
        <button onClick={() => handleClick(5)}>5 Stars</button>
      </div>
    )
}

export default RatingSystem