import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantById } from "../../../api";
import "../css/IndividualRestaurant.css";
import ItemList from "./ItemsList";
import {AiFillStar} from "react-icons/ai"

function IndividualRestaurant() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantById(restaurantId).then((data) => {
      setRestaurant(data);
    });
  }, [restaurantId]);

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
      <ItemList restaurantId={restaurantId} />
    </main>
  );
}

export default IndividualRestaurant;
