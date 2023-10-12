
import Home from './assets/components/Home'
import Nav from './assets/components/Nav'
import {Routes, Route } from 'react-router-dom'
import Restaurants from './assets/components/Restaurants'


function App() {



  return (
    <>
     <Nav/>
  <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Restaurants" element={<Restaurants />}/>
        </Routes>
    </>
  )
}

export default App
