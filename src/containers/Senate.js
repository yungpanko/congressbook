import React, { Component } from 'react'
import SenatorsList from '../components/SenatorsList'
import config from '../config'
import StateDropdown from '../components/StateDropdown'

const myHeaders = {
  'X-API-Key': config.PP_KEY
}

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
}


class Senate extends Component {
  constructor() {
    super()
    this.state = ({
      senate: '',
      districtState: ''
    })
  }

  getSenators = () => {
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json', myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        senate: resp.results[0].members.filter(member => member.in_office === true)
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  getFilteredSenators = (filter) => {
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json', myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        senate: resp.results[0].members.filter(member => member.in_office === true && filter.includes(member.state))
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  getCustomSenators = (state) => {
    fetch(`https://api.propublica.org/congress/v1/members/senate/${state}/current.json`, myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        senate: resp.results
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  componentDidMount = () => {
    this.getSenators()
  }

  stateFilter = (stateArray) => {
    if (stateArray.length > 0) {
      this.getFilteredSenators(stateArray)
    } else {
      this.getSenators()
    }
  }

  render() {
    return (
      <div className="mainContent">
        <StateDropdown stateFilter={this.stateFilter}/>
        <SenatorsList members={this.state.senate} districtState={this.state.districtState}/>
    </div>
    )
  }
}

export default Senate;
