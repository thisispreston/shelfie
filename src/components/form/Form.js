import React from 'react'
import "./Form.css"
import axios from 'axios'

class Form extends React.Component {
  constructor (props) {
    super(props)
  
    this.state = {
      img: '',
      name: '',
      price: 0,
      editingID: null,
    }

    this.postProduct = this.postProduct.bind(this)
  }

  componentDidUpdate(previousProps) {
    if (previousProps !== this.props) {
      this.setState({
        img: this.props.img,
        name: this.props.name,
        price: this.props.price,
      })
    }
  }

// Handler Functions for Inputs
  handleChangeImg = (e) => {
    this.setState({
      img: e.target.value
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

  postProduct (name, price, img) {
    axios
      .post('/api/product', { name, price, img })
      .then(() => this.props.getProducts())
      .catch(err => console.log(err))
  }

  clearInput = () => {
    this.setState({
      img: '',
      name: '',
      price: 0,
      editingID: null,
    })
  }

  // TO BE INVOKED ON SAVE BUTTON
  editProduct (id, name, price, img) {
    axios
      .put(`/api/product/${id}`, { name, price, img })
      .then(() => this.props.getProducts())
      .catch(err => console.log(err))
    this.clearInput()
  }

  render () {
    return (
      <div className="formInput">
        <h1>
          Form
        </h1>
        <div>
          {this.state.img ? <img src={this.state.img} className="inputImg" alt='product' /> : <img src={'https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-brands-brand_name-designer_clothes-designer_clothing-trendiness-cwln9760_low.jpg'} className="inputImg" alt='product' />}
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
        <div className="buttons">
          <button
            className="cancelButton"
            onClick={() => {this.clearInput()}}
          >
            Cancel
          </button>
          {this.state.editingID ? <button className="saveButton" onClick={() => this.editProduct(this.props.editingProduct.product_id, this.state.name, this.state.price, this.state.img)} >Save</button> : <button className="addButton" onClick={() => {this.postProduct(this.state.name, this.state.price, this.state.img)}}>Add to Inventory</button>}
        </div>
    </div>
    )
  }
}

export default Form