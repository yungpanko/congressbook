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
      senate: null
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

  getSenators = () => {
    fetch('https://api.propublica.org/congress/v1/115/senate/members.json', myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        senate: resp.results[0].members
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  // handleSearch = (searchTerm) => {
  //   fetch('https://www.googleapis.com/civicinfo/v2/representatives' +
  //       '?address=' + address +
  //       '&levels=country' +
  //       '&key=' + GOOGLE_API_KEY, myInit)
  //     .then(resp => resp.json())
  //     .then(resp => this.setState({
  //       senate: resp.results[0].members
  //     }))
  //     .catch(error => console.log(error)) // investigate 'throw' - how to display error
  //
  // }

  componentDidMount = () => {
    this.getHouseReps()
    this.getSenators()
  }

  render() {
    if (this.state.senate && this.state.house) {
      console.log("congress is in session");
    }
    return (
      <div>
        <h1>FindYourReps</h1>
        <AddressSearch handleSearch={this.handleSearch}/>
        <RepsList members={this.state.house}/>
        <SenatorsList members={this.state.senate}/>
    </div>
    )
  }
}

export default FindYourReps
