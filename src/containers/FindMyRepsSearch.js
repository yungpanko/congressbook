import React, { Component } from 'react'
import AddressSearch from '../components/AddressSearch'
import config from '../config'
import { Container } from 'semantic-ui-react'




class FindMyRepsSearch extends Component {

  testForSplitDistrict = (response) => {
    if (typeof response.offices[3] === 'undefined') {
      alert("This zip code is split across congressional districts. Please provide a full address")
    }
    return response
  }

  handleSearch = (searchTerm) => {
    fetch('https://www.googleapis.com/civicinfo/v2/representatives' +
        '?address=' + searchTerm +
        '&levels=country' +
        '&key=' + config.G_KEY)
      .then(resp => resp.json())
      .then(resp => this.testForSplitDistrict(resp))
      .then(resp => this.props.history.push(`/findmyreps/${resp.offices[3].divisionId.substr(resp.offices[3].divisionId.indexOf('/state:') + 7, 2)}/${resp.offices[3].divisionId.substr(resp.offices[3].divisionId.indexOf('/cd:') + 4, 2)}`), this.props.history)
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  render() {
    return (
      <Container>
        <h1>Search Only</h1>
        <AddressSearch handleSearch={this.handleSearch}/>
      </Container>
    )
  }
}

export default FindMyRepsSearch
