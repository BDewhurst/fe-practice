import React, { useState, useEffect } from "react";
import { getAllCuisines } from "../../../api";
import "../css/CuisineCard.css"

function CuisineCard() {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    getAllCuisines().then((data) => {
      setCuisines(data);
    });
  }, []); 

  return (
    <ul className="cuisine-list">
        
      {cuisines.map(({ slug, article_img_url }) => (
        <li key={slug} className="cuisine">
             <h1 className="cuisine_name">{slug}</h1>
          <img src={article_img_url} alt={slug} className="food_img"/>
          
        </li>
       
      ))}
    </ul>
  );
}

export default CuisineCard