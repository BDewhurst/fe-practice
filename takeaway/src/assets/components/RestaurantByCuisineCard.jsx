import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getRestaurantByCuisine } from "../../../api"
import { AiFillStar } from "react-icons/ai"

function RestaurantByCuisineCard () {

    const {cuisine} = useParams()

const [restaurant, setRestaurant] = useState([])

useEffect(() => {
    getRestaurantByCuisine(cuisine).then((data) => {
        setRestaurant(data)
    })
}, [])



    return (
        <main className="restaurant-container">

  <div className="restaurant-details">
    {restaurant.map(({ restaurant_id, name, address, cuisine, rating, article_img_url }) => (
      <div key={restaurant_id} className="restaurant-card">
        <h1 className="restaurant-name">{name}</h1>
      <p>{address}</p>
      <p>{cuisine}</p>
        <p className="Rating-container"><AiFillStar/>{rating}</p>
         <img src={article_img_url} alt={name} className="restaurant_img"/>  
      </div>
    ))}
  </div>
</main>
);
}

export default RestaurantByCuisineCard