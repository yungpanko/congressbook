import React, { Component } from 'react'
import config from '../config'
import RecentBills from '../components/RecentBills'

const myHeaders = {
  'X-API-Key': config.PP_KEY
}

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
}

class Bills extends Component {
  constructor() {
    super()
    this.state = ({
      bills: [],
      chamber: 'both',
      type: 'passed'
    })
  }

  getRecentBills = (chamber, type) => {
    fetch(`https://api.propublica.org/congress/v1/115/${chamber}/bills/${type}.json`, myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        bills: resp.results[0].bills,
        chamber: chamber,
        type: type
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  componentDidMount() {
    this.getRecentBills('both', 'passed')
  }

  handleClick = (event) => {
    let chamber = this.state.chamber
    let type = this.state.type
    switch (event.target.value) {
      case 'both':
        chamber = 'both'
        break
      case 'house':
        chamber = 'house'
        break;
      case 'senate':
        chamber = 'senate'
        break;
      default:
    }
    this.getRecentBills(chamber, type)
  }

  render() {
    return (
      <div>
      <RecentBills bills={this.state.bills} handleClick={this.handleClick}/>
    </div>
    )
  }
}

export default Bills
