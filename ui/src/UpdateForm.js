import React, { Component } from "react"
import NumInput from "./NumberInput"
import TextInput from "./TextInput"

const RESET_VALUES = { name: "", price: "$", category: "Shirts", image: "" }

export default class UpdateForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      product: { ...RESET_VALUES },
    }
  }

  handleChange({ target }, naturalValue) {
    const { name, value: textValue } = target
    const value = naturalValue === undefined ? textValue : naturalValue
    this.setState(({ product: prevProduct }) => {
      return { product: { ...prevProduct, ...{ [name]: value } } }
    })
    window.console.log(`Changed value to ${value}`)
  }

  render() {
    const {
      product: { price, name, image },
    } = this.state
    return (
      <form>
        <label>Category</label>
        <label>Price Per Unit </label>
        <select name="category" onBlur={this.handleChange}>
          <option value="Shirts">Shirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Jackets">Jackets</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Accessories">Accessories</option>
        </select>
        <NumInput name="price" onChange={this.handleChange} value={price} />
        <label>Product Name </label>
        <label>Image URL </label>
        <TextInput name="name" onChange={this.handleChange} value={name} />
        <TextInput name="image" onChange={this.handleChange} value={image} />
        <input type="submit" value="Add Product" onClick={this.handleSave} />
      </form>
    )
  }
}

// <h1> {`Update form for product ${this.props.match.params.id}`} </h1>
