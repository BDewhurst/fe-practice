import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantById } from "../../../api";
import "../css/IndividualRestaurant.css";
import ItemList from "./ItemsList";
import {AiFillStar} from "react-icons/ai"
import { ClipLoader } from "react-spinners";
import RatingSystem from "./RatingSystem";

function IndividualRestaurant() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurantById(restaurantId).then((data) => {
      setRestaurant(data);
      setIsLoading(false)
    });
  }, [restaurantId]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <ClipLoader color={"#36D7B7"} loading={isLoading} size={50} />
      </div>
    );
  }
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
      <RatingSystem setRestaurant={setRestaurant} />
      <ItemList restaurantId={restaurantId} />
    </main>
  );
}

export default IndividualRestaurant;
