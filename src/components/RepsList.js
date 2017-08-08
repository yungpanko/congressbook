import React from 'react'
import Congressperson from './Congressperson'

const RepsList = ({ members }) => {
  let displayList = ''
  if (members && Array.isArray(members)) {
    displayList = members.map(member => (
      <Congressperson member={member} key={member.id}/>
    ))
  } else if (members.id) {
    displayList = <Congressperson member={members} key={members.id} />
  }
  return (
    <div>
      <h3>U.S. House of Represenatives</h3>
      <hr></hr>
      <ul>
        {displayList}
      </ul>
    </div>
  )
}

export default RepsList
