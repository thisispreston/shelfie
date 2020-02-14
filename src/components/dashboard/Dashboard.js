import React from 'react'
import Product from '../product/Product'
// import "./Dashboard.css"

const Dashboard = (props) => {
// map over props to make a card for each <Product />

  return (
    <div>
      <h1>
        Dashboard
      </h1>
      <Product />
    </div>
  )
}

export default Dashboard