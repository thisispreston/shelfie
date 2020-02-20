import React from 'react'
import axios from 'axios'
import Product from '../product/Product'
import "./Dashboard.css"

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: [],
      editingProduct: [],
    }
  }

  componentDidMount () {
    this.getProducts()
  }

  getProducts = () => {
    axios.get('/api/products').then( res => {
      this.setState({ 
        inventory: res.data
      })
    }).catch( (err) => console.log(err))
  }

  toEditForm = (id) => {
    this.props.history.push(`/edit-form/${id}`)
  }

  delete = (id) => {
    axios
      .delete(`/api/products/${id}`)
      .then(() => this.props.getProducts())
      .catch(err => console.log(err))
  }

  render () {
    const { inventory, chooseEdit } = this.state
  
    let productList = inventory.map( e => {
      return (
        <Product
          key={e.product_id}
          id={e.product_id}
          img={e.img}
          name={e.name}
          price={e.price}
          delete={this.delete}
          // chooseEdit={chooseEdit}
          toEditForm={this.toEditForm}
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