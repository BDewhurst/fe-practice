
import Home from './assets/components/Home'
import Nav from './assets/components/Nav'
import {Routes, Route } from 'react-router-dom'
import Restaurants from './assets/components/Restaurants'
import Cuisine from './assets/components/Cuisine'
import IndividualRestaurant from './assets/components/IndividualRestaurantCard'
import Login from './assets/components/Login'
import RestaurantByCuisineCard from './assets/components/RestaurantByCuisineCard'



function App() {





  return (
    
    <>
     <Nav/>

  <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Restaurants" element={<Restaurants />}/>
        <Route path="Restaurant/:restaurantId" element={<IndividualRestaurant />}/>
        <Route path="/Cuisine" element={<Cuisine />}/>
        <Route path= "/login" element={<Login />} />
        <Route path="cuisines/:cuisine" element={<RestaurantByCuisineCard />}/>
        </Routes>
    </>
   
  )
}

export default App
