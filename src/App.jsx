import React,{useState} from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from './Components/NavBar'

import Home from './Components/Home'
import Products from './Components/Products.jsx'
import Cart from './Components/Cart'

export default function App() {

  let [AddedProduct,SetAddedProduct] = useState();

  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/Products' element = {<Products SetAddedProduct = {SetAddedProduct} />} />
          <Route path='/Cart' element = {<Cart AddedProduct = {AddedProduct}/>} />
          <Route path='*' element = {<h1>Not Found</h1>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}
