import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getRestaurantById } from "../../../api"
import { AiFillStar } from "react-icons/ai"
import "../css/IndividualRestaurant.css"


function IndividualRestaurant () {
    const { restaurantId } = useParams()
const [restaurant, setRestaurant] = useState([])
useEffect(()=> {
getRestaurantById(restaurantId).then((data) => {
    setRestaurant(data)
}), [restaurantId]
})
    return (
        <ul className="individual-restaurant">
        
        {restaurant.map(({ restaurant_id, name, address, cuisine, rating, article_img_url}) => (
          <li key={restaurant_id} className="restaurant-card">

               <h1 className="restaurant-name">{name}</h1>
               <p>{address}</p>
               <p>{cuisine}</p>
               <p className="rating-container"><AiFillStar/>{rating}</p>
               <img src={article_img_url} alt={name} className="restaurant_img"/>  
                     
          </li>
         
        ))}
      </ul>
    )
}

export default IndividualRestaurant