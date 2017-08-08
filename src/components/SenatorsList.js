import React from 'react'
import Congressperson from './Congressperson'
import { Card } from 'semantic-ui-react'

const SenatorsList = ({ members, districtState }) => {
  let displayList = ''
  if (members) {
    displayList = members.map(member => (
      <Congressperson member={member} key={member.id} districtState={districtState}/>
    ))
  }
  return (
    <div>
        <h3>U.S. Senate</h3>
        <hr></hr>
        <Card.Group itemsPerRow={4}>
          {displayList}
        </Card.Group>
      </div>
  )
}

export default SenatorsList
