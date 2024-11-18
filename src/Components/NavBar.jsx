import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'



export default function NavBar() {
  return (
    <nav>
        <h2>Logo</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/Stores">Stores</Link></li>
        </ul>
    </nav>
  )
}
