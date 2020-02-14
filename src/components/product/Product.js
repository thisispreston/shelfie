import React from 'react'
// import "./Product.css"

const Product = (props) => {
// props are the individual objexts for each product: name, price, imageUrl
  return (
    <div>
      <img src={props.imageUrl} />
      <div>
        Product Name: {props.name}
      </div>
      <div>
        Price: {props.price}
      </div>
    </div>
  )
}

export default Product