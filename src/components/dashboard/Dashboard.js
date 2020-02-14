import React from 'react'
import Product from '../product/Product'
import "./Dashboard.css"

const Dashboard = (props) => {
  const { inventory } = props

  let productList = inventory.map( e => {
    return (
      <Product
        key={e.product_id}
        img={e.img}
        name={e.name}
        price={e.price}
      />
    )
  })

  return (
    <div>
      <h1>
        Dashboard
      </h1>
      {productList}
    </div>
  )
}

export default Dashboard