import React from 'react'
import Congressperson from './Congressperson'
import { Card } from 'semantic-ui-react'

const RepsList = ({ members, districtState }) => {
  let displayList = ''
  if (members && Array.isArray(members)) {
    displayList = members.map(member => (
      <Congressperson member={member} key={member.id} districtState={districtState}/>
    ))
  } else if (members.id) {
    displayList = <Congressperson member={members} key={members.id} districtState={districtState}/>
  }
  return (
    <div>
      <h3>U.S. House of Represenatives</h3>
      <hr></hr>
        <Card.Group itemsPerRow={4}>
          {displayList}
        </Card.Group>
      </div>
  )
}

export default RepsList
