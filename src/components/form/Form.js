import React from 'react'
import "./Form.css"

class Form extends React.Component {
  constructor (props) {
    super(props)
  
    this.state = {
      imgUrl: '',
      name: '',
      price: 0,
    }

    this.postProduct = this.postProduct.bind(this)
  }

// Handler Functions for Inputs
  handleChangeImg = (e) => {
    this.setState({
      imgUrl: e.target.value
    })
  }
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleChangePrice = (e) => {
    this.setState({
      price: e.target.value
    })
  }

  postProduct () {
    //POST 
    this.props.getProducts()
  }

  clearInput = () => {
    this.setState({
      imgUrl: '',
      name: '',
      price: 0,
    })
  }

  render () {
    return (
      <div className="formInput">
        <h1>
          Form
        </h1>
        <div>
          <img
            src="https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-brands-brand_name-designer_clothes-designer_clothing-trendiness-cwln9760_low.jpg"
            className="inputImg"
          />
          <input
            className="imgUrlInput"
            onChange={this.handleChangeImg}
            placeholder="Image URL"
          />
          <input
            className="nameInput"
            onChange={this.handleChangeName}
            placeholder="Product Name"
          />
          <input
            type='number'
            className="priceInput"
            onChange={this.handleChangePrice}
            placeholder="Product Price"
          />
        </div>
        <div>
          <button
            className="cancelButton"
            onClick={() => {this.clearInput()}}
          >
            Cancel
          </button>
          <button
            className="addButton"
            onClick={() => {this.getProducts()}}
          >
            Add to Inventory
          </button>
        </div>
    </div>
    )
  }
}

export default Form