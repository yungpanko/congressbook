import React from 'react'
import Congressperson from './Congressperson'
import { Card } from 'semantic-ui-react'

const SenatorsList = ({ members, districtState }) => {
  let displayList = ''
  if (members && districtState) {
    displayList = members.map(member => (
      <Congressperson member={member} key={member.id} districtState={districtState}/>
    ))
  } else if (members) {
    displayList = members.map(member => (
      <Congressperson member={member} key={member.id} districtState={member.state}/>
    ))
  }
  return (
    <div>
        <h3>U.S. Senate</h3>
        <Card.Group itemsPerRow={4}>
          {displayList}
        </Card.Group>
      </div>
  )
}

export default SenatorsList
