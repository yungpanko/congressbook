import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Congressperson extends Component {
  constructor() {
    super()
    this.state = ({
      imageURL: ''
    })
  }

  picError = () => {
    this.setState({
      imageURL: 'dummy-profile-pic.png'
    })
  }

  componentDidMount() {
    this.setState({
      imageURL: `http://bioguide.congress.gov/bioguide/photo/${this.props.member.id.charAt(0)}/${this.props.member.id}.jpg`
    })
  }

  render() {
    const member = this.props.member
    const districtState = this.props.districtState
    const middle = member.middle_name ? " " + member.middle_name + " " : " "
    let twitter
    let chamber
    if (member.twitter_account) {
      twitter = <a href={`https://twitter.com/${member.twitter_account}`} target="_blank">@{member.twitter_account}</a>
    } else if (member.twitter_id) {
      twitter = <a href={`https://twitter.com/${member.twitter_id}`} target="_blank">@{member.twitter_id}</a>
    }
    if (member.district) {
      chamber = 'house'
    } else {
      chamber = 'senate'
    }

    return (
      <Card>
      <NavLink to={`/${chamber}/${member.id}`}>
        <img alt={member.id} className='ui fluid image' src={this.state.imageURL} onError={this.picError.bind(this)}/>
      </NavLink>
      <Card.Content>
        <Card.Header>
          {member.first_name + middle + member.last_name} - {member.state} ({member.party})
        </Card.Header>
        <Card.Meta>
          {twitter}
        </Card.Meta>
        <Card.Description>
          {member.state ? member.state : ''} {member.state && member.district ? " - " + member.district : ''}
          {districtState ? districtState.toUpperCase() : ''} {districtState && member.district ? " - " + member.district : ''}
        </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default Congressperson
