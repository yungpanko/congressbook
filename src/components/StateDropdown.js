import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import stateOptions from '../states.js'

// stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

class StateDropdown extends Component {
  constructor() {
    super()
    this.state = ({
      text: []
    })
  }

  handleChange = (event, data) => {
    this.setState({
      text: data.value
    })
  }

  render() {
    console.log(this.state.text)
    return (
      <Dropdown placeholder='State' fluid multiple search selection options={stateOptions}
        onChange={this.handleChange}
        value={this.state.text}/>
    )
  }
}

export default StateDropdown
