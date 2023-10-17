import React, { useState, useEffect } from "react";
import { getAllRestaurants} from "../../../api";
import "../css/RestaurantCard.css"
import {AiFillStar} from "react-icons/ai"
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function RestaurantCard() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllRestaurants().then((data) => {
      setRestaurants(data);
     setIsLoading(false)
    });
  }, []); 

  if (isLoading) {
    return (
      <div className="loading-container">
        <ClipLoader color={"#36D7B7"} loading={isLoading} size={50} />
      </div>
    );
  }

  return (
    <ul className="restaurant-list">
        
      {restaurants.map(({ restaurant_id, name, address, cuisine, rating, article_img_url}) => (
        <li key={restaurant_id} className="restaurant">
          <Link to={`/restaurant/${restaurant_id}`}>
             <h1 className="restaurant_name">{name}</h1>
             <p>{address}</p>
             <p>{cuisine}</p>
             <p className="Rating-container"><AiFillStar/>{rating}</p>
             <img src={article_img_url} alt={name} className="restaurant_image"/>  
             </Link>        
        </li>
       
      ))}
    </ul>
  );
}

export default RestaurantCard