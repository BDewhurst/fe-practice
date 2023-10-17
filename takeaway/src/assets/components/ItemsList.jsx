import { useState, useEffect } from "react"
import { getItemById } from "../../../api"
import "../css/itemList.css"
import {BiBasket} from "react-icons/bi"
function ItemList ({restaurantId}) {
    const [items, setItems] = useState([])
    useEffect(()=> {
        getItemById(restaurantId).then((data) => {
            setItems(data)
        })
    }, [restaurantId])
    return (
        <ul className="individual-item">
        
        {items.map(({ item_id, name, description, price}) => (
          <li key={item_id} className="item-card">

               <h1 className="item-name">{name}</h1>
               <p>{description}</p>
               <p>£{price}</p>
               <p id="basket-container">Basket<BiBasket/></p>
               </li>
            )
          )
        }
      </ul> 
    )
}

export default ItemList