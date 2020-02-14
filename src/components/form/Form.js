import React from 'react'
// import "./Form.css"

class Form extends React.Component {
  constructor (props) {
    super(props)
  
    this.state = {
      name: '',
      price: 0,
      imgurl: '',
    }

    // this.state.postProduct = this.state.postProduct.bind(this)
  }

  // handleChange = () => {
// ONE FOR EACH INPUT
  // }

  // postProduct () {

  // }

  // clearInput () {

  // }

  render () {
    return (
      <div>
        <h1>
          Form
        </h1>
    </div>
    )
  }
}

export default Form