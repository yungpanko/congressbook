import React from 'react'
import { Card } from 'semantic-ui-react'

const Congressperson = ({ member, districtState }) => {
  const middle = member.middle_name ? " " + member.middle_name + " " : " "
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {member.first_name + middle + member.last_name} - {member.state} ({member.party})
        </Card.Header>
        <Card.Meta>
          {member.twitter_account ? '@' + member.twitter_account : ''}
          {member.twitter_id ? '@' + member.twitter_id : ''}
        </Card.Meta>
        <Card.Description>
          {member.state ? member.state : ''} {member.state && member.district ? " - " + member.district : ''}
          {districtState ? districtState.toUpperCase() : ''} {districtState && member.district ? " - " + member.district : ''}
        </Card.Description>
      </Card.Content>
      </Card>
  )
}

export default Congressperson
