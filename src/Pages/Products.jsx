import React,{useState} from 'react'
import "./Products.css"

import { useNavigate } from 'react-router-dom'

export default function Products() {

  let navigate = useNavigate();

  let [Products,setProducts] = useState([
    {
      id:1,
      name: "Dell Insprion 7591",
      desc : "I7 with 16 Gb Ram With 6 Gb Graphis Card",
      price: 120000,
      category:"Electronics",
      image: "https://i.dell.com/is/image/dellcontent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-7591/global-spi/ng/notebook-inspiron-15-7591-bestof-500-ng.psd?fmt=png-alpha&wid=500&hei=500&fit=constrain,1"
    },{
      id:2,
      name: "HP Pavilion X360",
      desc : "Intel Core i5 with 8 Gb Ram With 128 Gb SSD",
      price: 80000,
      category:"Electronics",
      image: "https://placehold.co/600x400"
    },{
      id:3,
      name: "Lenovo IdeaPad S145",
      desc : "Intel Core i5 with 8 Gb Ram With 512 Gb SSD",
      price: 65000,
      category:"Electronics",
      image: "https://placehold.co/600x400"
    },{
      id:4,
      name: "Apple Macbook Air",
      desc : "Intel Core i5 with 8 Gb Ram With 128 Gb SSD",
      price: 100000,
      category:"Electronics",
      image: "https://placehold.co/600x400"
    },{
      id:5,
      name: "Samsung Galaxy S20",
      desc : "Qualcomm Snapdragon 855 with 8 Gb Ram With 128 Gb SSD",
      price: 150000,
      category:"Electronics",
      image: "https://placehold.co/600x400"
    }
  ])

  return (
    <div>
        <center>
            <h2>Products Page</h2>
            <p>Here you can find all the products available.</p>
        </center>

        <hr />

        <div className="ProductContainer">

            {
              Products.map((e)=>(
                <div className="ProductCard">
                  <img src={e.image} alt={e.name} />
                  <h3>{e.name}</h3>
                  <p>{e.desc}</p>
                  <p>Price: ${e.price}</p>
                  <button onClick={()=>{
                    navigate("/ProductDetails")
                  }} >View</button>
                  <button>Add to Cart</button>
                </div>
              ))
            }


        </div>


    </div>
  )
}
