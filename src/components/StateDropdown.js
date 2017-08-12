import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import stateOptions from '../states.js'

class StateDropdown extends Component {
  constructor() {
    super()
    this.state = ({
      text: [],
      searchInput: ''
    })
  }

  handleChange = (event, data) => {
    if (Array.isArray(data.value)) {
      this.setState({
        text: data.value,
        searchInput: ''
      })
    } else {
      this.setState({
        searchInput: data
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.text !== nextState.text
  }



  componentDidUpdate() {
    this.props.stateFilter(this.state.text)
  }

  render() {
    return (
      <Dropdown placeholder='State' fluid multiple search selection options={stateOptions}
        onChange={this.handleChange}
        value={this.state.text}
        onSearchChange={this.handleChange}
        searchInput={this.state.searchInput}
      />
    )
  }
}

export default StateDropdown
