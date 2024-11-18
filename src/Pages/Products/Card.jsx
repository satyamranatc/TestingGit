import React from 'react';
import './Products.css';

export default function Card({ P }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={`https://placehold.co/600x400`} alt={P.name} />
      </div>
      <div className="product-info">
        <h2>{P.name}</h2>
        <p className="description">{P.description}</p>
        <div className="price-row">
          <span className="price">${P.price.toFixed(2)}</span>
          <button className="order-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}