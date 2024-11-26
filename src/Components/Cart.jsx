import React from 'react'

export default function Cart({AddedProduct}) {
  return (
    <div>
      <div>
        <center><h1>Cart</h1></center>
      </div>
      <div>

          <img src={AddedProduct.image} alt="" />
          <h2>{AddedProduct.name}</h2>
          <p>{AddedProduct.description}</p>
          <p>{AddedProduct.price}</p>

      </div>
    </div>
  )
}
