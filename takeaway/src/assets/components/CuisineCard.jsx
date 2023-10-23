import React, { useState, useEffect } from "react";
import { getAllCuisines } from "../../../api";
import "../css/CuisineCard.css"
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

function CuisineCard() {
  const [cuisines, setCuisines] = useState([]);
  const [isLoading, setIsLoading] =useState(true)
  useEffect(() => {
    getAllCuisines().then((data) => {
      setCuisines(data);
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
    <ul className="cuisine-list">
        
      {cuisines.map(({ slug, article_img_url }) => (
  <Link to={`/cuisines/${slug}`}>
        <li key={slug} className="cuisine">
             <h1 className="cuisine_name">{slug}</h1>
          <img src={article_img_url} alt={slug} className="food_img"/>
          
        </li>
        </Link>
      ))}
    </ul>
  );
}

export default CuisineCard