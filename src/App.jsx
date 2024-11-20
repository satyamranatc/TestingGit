import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// ?----------------Components----------
import NavBar from './Components/NavBar'
// ?----------------Pages----------------
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails.jsx'



export default function App() {
  return (
    <div>
      <BrowserRouter >
        <NavBar/>

        <Routes>

          <Route path='' element = {<Home/>} />
          <Route path='/Products' element = {<Products/>} />
          <Route path='/ProductDetails' element = {<ProductDetails/>} />




        </Routes>
      
      
      </BrowserRouter>


    </div>
  )
}
