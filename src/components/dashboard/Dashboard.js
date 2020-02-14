import React from 'react'
import axios from 'axios'
import Product from '../product/Product'
import "./Dashboard.css"

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  delete = (id) => {
    axios
      .delete(`/api/products/${id}`)
      .then(() => this.props.getProducts())
      .catch(err => console.log(err))
  }

  render () {
    const { inventory, chooseEdit } = this.props
  
    let productList = inventory.map( e => {
      return (
        <Product
          key={e.product_id}
          id={e.product_id}
          img={e.img}
          name={e.name}
          price={e.price}
          delete={this.delete}
          chooseEdit={chooseEdit}
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
}

export default Dashboard