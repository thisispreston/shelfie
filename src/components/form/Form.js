import React from 'react'
// import "./Form.css"

class Form extends React.Component {
  constructor (props) {
    super(props)
  
    this.state = {
      imgUrl: '',
      name: '',
      price: 0,
    }

    // this.state.postProduct = this.state.postProduct.bind(this)
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
        <img src="https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-brands-brand_name-designer_clothes-designer_clothing-trendiness-cwln9760_low.jpg" />
        <div className="formInput">
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
            className="priceInput"
            onChange={this.handleChangePrice}
            placeholder="Product Price"
          />
        </div>
        <div>
          <button className="cancelButton">
            Cancel
          </button>
          <button className="addButton">
            Add to Inventory
          </button>
        </div>
    </div>
    )
  }
}

export default Form