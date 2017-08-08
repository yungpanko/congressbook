import React, { Component } from 'react'
import RepsList from '../components/RepsList'
import SenatorsList from '../components/SenatorsList'
import AddressSearch from '../components/AddressSearch'
import config from '.././config'

const myHeaders = {
  'X-API-Key': config.PP_KEY
}

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
}



class FindYourReps extends Component {
  constructor() {
    super()
    this.state = ({
      house: null,
      senate: null,
      districtState: null
    })
  }

  getHouseReps = () => {
    fetch('https://api.propublica.org/congress/v1/115/house/members.json', myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        house: resp.results[0].members
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

  getSenators = () => {
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json', myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        senate: resp.results[0].members
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

  handleSearch = (searchTerm) => {
    fetch('https://www.googleapis.com/civicinfo/v2/representatives' +
        '?address=' + searchTerm +
        '&levels=country' +
        '&key=' + config.G_KEY)
      .then(resp => resp.json())
      .then(resp => this.filterMembers(
        resp.offices[3].divisionId.substr(resp.offices[3].divisionId.indexOf('/state:') + 7, 2),
        resp.offices[3].divisionId.substr(resp.offices[3].divisionId.indexOf('/cd:') + 4, 2)
      ))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  filterMembers = (state, district) => {
    this.getCustomHouseReps(state, district)
    this.getCustomSenators(state)
  }

  componentDidMount = () => {
    // this.getHouseReps()
    // this.getSenators()
  }

  render() {
    if (this.state.senate && this.state.house) {
      console.log("congress is in session");
      return (
        <div>
          <h1>FindYourReps</h1>
          <AddressSearch handleSearch={this.handleSearch}/>
          <RepsList members={this.state.house}/>
          <SenatorsList members={this.state.senate}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>FindYourReps</h1>
          <AddressSearch handleSearch={this.handleSearch}/>
        </div>
      )
    }
  }
}

export default FindYourReps
