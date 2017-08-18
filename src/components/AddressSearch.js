import React, { Component } from 'react'
import { Input, Container, Form, Message } from 'semantic-ui-react'

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
    const warning = this.props.warning ? 'warning' : ''
    return (
      <Container textAlign="center">
        <br/>
        <br/>
        <Form size='huge' className={warning}
          onSubmit={this.handleSubmit}>
          <Input icon="search" type="text"
            placeholder="Enter your address"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <Message warning
            header='Split District!'
            content='This zip code is split across congressional districts. Please provide a full address.'
          />
        </Form>
      </Container>
    )
  }


}

export default AddressSearch
