import React from 'react'
import axios from 'axios'


class EditForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      price: 0,
      name: '',
      img: '',
    }
  }

  componentDidMount () {
    let {id} = this.props.match.params
    axios
      .get(`/api/product/${id}`)
      .then(res => {
        this.setState({
          price: res.data[0].price,
          name: res.data[0].name,
          img: res.data[0].img,
        })
      })
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val,
    })
  }

  editProduct () {
    const { name, price, img } = this.state
    let {id} = this.props.match.params

    axios
      .put(`/api/products/${id}`, { name, price, img })
      .then(() => this.props.getProducts())
      .catch(err => console.log(err))
      this.props.history.push(`/`)
  }
    
    render () {
    const { name, price, img } = this.state
    console.log(this.state)
    return (
      <div>
        <h1>EDIT FORM</h1>
        {img ?
            (<img 
              src={img} 
              className="inputImg"
              alt='product' />
            ) : (
            <img 
              src={'https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-brands-brand_name-designer_clothes-designer_clothing-trendiness-cwln9760_low.jpg'}
              className="inputImg"
              alt='product'
            />)}
          <input
            className="imgUrlInput"
            onChange={e => this.handleChange('img', e.target.value)}
            placeholder="Image URL"
            value={img}
          />
          <input
            className="nameInput"
            onChange={e => this.handleChange('name', e.target.value)}
            placeholder="Product Name"
            value={name}
          />
          <input
            type='number'
            className="priceInput"
            onChange={e => this.handleChange('price', e.target.value)}
            placeholder="Product Price"
            value={price}
          />
          <button onClick={() => this.editProduct()}>
            SAVE
          </button>
      </div>
    )
  }
}

export default EditForm