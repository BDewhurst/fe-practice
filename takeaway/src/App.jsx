
import Home from './assets/components/Home'
import Nav from './assets/components/Nav'
import {Routes, Route } from 'react-router-dom'
import Restaurants from './assets/components/Restaurants'
import Cuisine from './assets/components/Cuisine'
import IndividualRestaurant from './assets/components/IndividualRestaurantCard'
import { createContext } from 'react'
import Login from './assets/components/Login'
import { useEffect, useState } from 'react'


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
        </Routes>
    </>
  )
}

export default App
