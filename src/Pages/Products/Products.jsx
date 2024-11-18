import React, { useState } from 'react';
import Card from './Card';
import './Products.css';

export default function Products() {
  const [ProductsData] = useState([
    {id: 1, name: 'Cappuccino', price: 2.50, description: 'A classic Italian coffee blend.'},
    {id: 2, name: 'Latte', price: 3.00, description: 'A refreshing, caffeinated beverage.'},
    {id: 3, name: 'Americano', price: 2.75, description: 'A classic Italian coffee drink.'},
    {id: 4, name: 'Mocha', price: 3.25, description: 'A rich, complex coffee drink.'},
    {id: 5, name: 'Flat White', price: 3.00, description: 'A refreshing, caffeinated beverage.'},
  ]);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Coffee Selection</h1>
        <p className="subtitle">Handcrafted with passion and precision</p>
      </div>

      <div className="product-container">
        {ProductsData.map((product) => (
          <Card key={product.id} P={product} />
        ))}
      </div>
    </div>
  );
}