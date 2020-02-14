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

  // getInventory = () => {
    
  // }

  render () {
    return (
      <div>
        <Header />
        <Dashboard />
        <Form />
      </div>
    )
  }
}

export default App