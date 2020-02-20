import React from 'react'
import "./Product.css"

const Product = (props) => {
// props are the individual objects for each product: name, price, imageUrl
  const { id, img, name, price, toEditForm } = props

  return (
    <div className="productCard">
      {img ? (
        <img
          src={img}
          className="productImg"
          alt='product' />
      ) : (
        <img
          src={'https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-brands-brand_name-designer_clothes-designer_clothing-trendiness-cwln9760_low.jpg'}
          className="productImg"
          alt='product'
      />)}
      <p>
        Product Name: {name}
      </p>
      <p>
        Price: {price}
      </p>
      <div>
        <button
          onClick={() => props.delete(id)}
        >
          Delete
        </button>
        <button
          onClick={() => toEditForm(id)}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default Product