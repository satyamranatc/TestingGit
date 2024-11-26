import React from 'react'
import { Link } from 'react-router'

export default function NavBar() {
  return (
    <nav>
        <h2>The Product App</h2>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/Products">Products</Link></li>
            <li><Link to = "/Cart">Cart</Link></li>
        </ul>
    </nav>
  )
}
