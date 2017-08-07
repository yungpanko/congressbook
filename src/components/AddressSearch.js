import React, { Component } from 'react'

class AddressSearch extends Component {
  constructor() {
    super()
    this.state = ({
      text: ''
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearch(this.state.text)
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }


}

export default AddressSearch
