import React from 'react'
import axios from 'axios'
import "./App.css"
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'

class App extends React.Component {
  constructor (props) {
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

  chooseEdit = (id) => {
    let index = this.state.inventory.findIndex(el => {
      if (el.product_id === id) {
        return el
      }
    })
    
    this.setState({
      editingProduct: this.state.inventory[index]
    })
  }

  render () {
    return (
      <div>
        <Header />
        <div className="body">
          <Dashboard
            inventory={this.state.inventory}
            getProducts={this.getProducts}
            chooseEdit={this.chooseEdit}
          />
          <Form
            getProducts={this.getProducts}
            editingProduct={this.state.editingProduct}
          />
        </div>
      </div>
    )
  }
}

export default App