import React, { useState, useEffect } from "react";
import { getAllRestaurants} from "../../../api";


function RestaurantCard() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getAllRestaurants().then((data) => {
      setRestaurants(data);
    });
  }, []); 

  return (
    <ul className="restaurant-list">
        
      {restaurants.map(({ restaurant_id, name, address, cuisine, rating, article_img_url}) => (
        <li key={restaurant_id} className="restaurant">
             <h1 className="restaurant_name">{name}</h1>
             <p>{address}</p>
             <p>{cuisine}</p>
             <p>{rating}</p>
             <img src={article_img_url} alt={name} className="restaurant_img"/>          
        </li>
       
      ))}
    </ul>
  );
}

export default RestaurantCard