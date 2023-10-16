import { useState, useEffect } from "react"
import { getItemById } from "../../../api"
function ItemList ({restaurantId}) {
    const [items, setItems] = useState([])
    useEffect(()=> {
        getItemById(restaurantId).then((data) => {
            setItems(data)
        })
    })
    return (
        <ul className="individual-item">
        
        {items.map(({ item_id, name, description, price}) => (
          <li key={item_id} className="item-card">

               <h1 className="item-name">{name}</h1>
               <p>{description}</p>
               <p>£{price}</p>
               </li>
            )
          )
        }
      </ul> 
    )
}

export default ItemList