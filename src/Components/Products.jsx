import React,{useState} from 'react'

export default function Products({SetAddedProduct}) {
  let [ProductsData,setProductsData] = useState(
    [
    {
      id:101,
      name:"Product 1",
      price:100,
      description:"This is Product 1",
      quantity:5,
      image:"https://placehold.co/600x400"
    },
    {
      id:102,
      name:"Product 2",
      price:200,
      description:"This is Product 2",
      quantity:3,
      image:"https://via.placeholder.com/600x400"
    },{
      id:103,
      name:"Product 3",
      price:300,
      description:"This is Product 3",
      quantity:7,
      image:"https://via.placeholder.com/600x400"
    },
    {
      id:104,
      name:"Product 4",
      price:400,
      description:"This is Product 4",
      quantity:2,
      image:"https://via.placeholder.com/600x400"
    },
    {
      id:105,
      name:"Product 5",
      price:500,
      description:"This is Product 5",
      quantity:1,
      image:"https://via.placeholder.com/600x400"
    }
  ]
  );



  return (
    <div>

      <div>
        <center> <h2>Product Page</h2></center>
      </div>


      <div className="ProductCard">
        {
          ProductsData.map((e)=>(
            <div className="ProductCard">
              <img src={e.image} alt="" />
              <h3>{e.name}</h3>
              <p>{e.description}</p>
              <p>Price: ${e.price}</p>
              <button>View Now</button>
              <button onClick={()=>{
                console.log(e);
                SetAddedProduct(e)
              }} >Add To Cart</button>
            </div>
          ))

        }
      </div>





    </div>
  )
}
