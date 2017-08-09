import React from 'react'
import { Card } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Congressperson = ({ member, districtState }) => {
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
    <NavLink to={`/${chamber}/${member.id}`}>
    <Card>
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
    </NavLink>
  )
}

export default Congressperson
