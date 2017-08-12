import React, { Component } from 'react'
import RepsList from '../components/RepsList'
import config from '.././config'
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


class House extends Component {
  constructor() {
    super()
    this.state = ({
      house: '',
      districtState: '',
      districtCode: ''
    })
  }

  getHouseReps = () => {
    fetch('https://api.propublica.org/congress/v1/115/house/members.json', myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        house: resp.results[0].members.filter(member => member.in_office === true)
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error

  }

  getFilteredHouseReps = (filter) => {
    fetch('https://api.propublica.org/congress/v1/115/house/members.json', myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        house: resp.results[0].members.filter(member => member.in_office === true && filter.includes(member.state))
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  getCustomHouseReps = (state, district) => {
    fetch(`https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`, myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        house: resp.results[0]
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  componentDidMount = () => {
    this.getHouseReps()
  }

  stateFilter = (stateArray) => {
    if (stateArray.length > 0) {
      this.getFilteredHouseReps(stateArray)
    } else {
      this.getHouseReps()
    }
  }


  render() {
    return (
      <div className="mainContent">
        <StateDropdown stateFilter={this.stateFilter}/>
        <RepsList members={this.state.house} districtState={this.state.districtState}/>
      </div>
    )
  }
}

export default House;
