import React, { Component } from 'react'
import { Input, Container, Form } from 'semantic-ui-react'

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
      <Container textAlign="center">
        <br/>
        <br/>
        <Form size='huge'
          onSubmit={this.handleSubmit}>
          <Input icon="search" type="text"
            placeholder="Enter your address"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </Form>
      </Container>
    )
  }


}

export default AddressSearch
