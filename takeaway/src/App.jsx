
import Home from './assets/components/Home'
import Nav from './assets/components/Nav'
import {Routes, Route } from 'react-router-dom'
import Restaurants from './assets/components/Restaurants'
import Cuisine from './assets/components/Cuisine'
import IndividualRestaurant from './assets/components/IndividualRestaurantCard'


function App() {



  return (
    <>
     <Nav/>
  <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Restaurants" element={<Restaurants />}/>
        <Route path="Restaurant/:restaurantId" element={<IndividualRestaurant />}/>
        <Route path="/Cuisine" element={<Cuisine />}/>
        </Routes>
    </>
  )
}

export default App
