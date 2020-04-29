import React, { Component } from "react"

export default class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.value }
    this.onBlur = this.onBlur.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange({ target: { value = "" } }) {
    this.setState({ value })
  }

  componentDidUpdate(prevProps) {
    const {value: prevValue} = prevProps
    const {value: newValue} = this.props
    if(prevValue !== newValue) {
      this.setState({ value: newValue })
    }
  }

  onBlur(e) {
    const { onChange } = this.props
    const { value } = this.state
    onChange(e, value)
  }

  render() {
    const { value } = this.state
    const { name } = this.props
    return (
      <input
        type="text"
        name={name}
        value={value}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    )
  }
}
