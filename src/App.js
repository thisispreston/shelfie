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

  render () {
    return (
      <div>
        <Header />
        <div className="body">
          <Dashboard
            inventory={this.state.inventory}
            getProducts={this.getProducts}
          />
          <Form
            getProducts={this.getProducts}
          />
        </div>
      </div>
    )
  }
}

export default App