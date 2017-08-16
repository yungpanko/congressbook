import React from 'react'
import Congressperson from './Congressperson'
import { Loader, Card } from 'semantic-ui-react'

const SenatorsList = ({ members, districtState }) => {
  let displayList = null
  let loader = (<Loader active inline='centered'/>)
  if (members && districtState) {
    loader = ''
    displayList = members.map(member => (
      <Congressperson member={member} key={member.id} districtState={districtState}/>
    ))
  } else if (members) {
    loader = ''
    displayList = members.map(member => (
      <Congressperson member={member} key={member.id} districtState={member.state}/>
    ))
  }
  return (
    <div>
      <br></br>
        <h3>U.S. Senate</h3>
        {loader}
        <Card.Group itemsPerRow={4}>
          {displayList}
        </Card.Group>
      </div>
  )
}

export default SenatorsList
