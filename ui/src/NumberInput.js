import React, { Component } from "react"

function format(num) {
  return num != null ? num.toString() : ""
}
function unformat(str) {
  const val = parseFloat(str, 10)
  return Number.isNaN(val) ? null : val
}
export default class NumInput extends Component {
  constructor(props) {
    super(props)
    this.state = { value: format(props.value) }
    this.onBlur = this.onBlur.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange({ target: { value = " " } }) {
    // Remove the currency symbol '$'
    const strippedValue = value.substring(1)
    if (value.match(/^\d*\.?\d*$/)) {
      this.setState({ value: `$${strippedValue}` })
    }
  }

  onBlur(e) {
    const { onChange } = this.props
    const { value } = this.state
    onChange(e, unformat(value.substring(1)))
  }

  render() {
    const { value } = this.state
    return (
      <input
        type="text"
        value={value}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    )
  }
}