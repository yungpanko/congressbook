import React from 'react'
import Congressperson from './Congressperson'

const RepsList = ({ members }) => {
  let displayList = ''
  if (members) {
    displayList = members.map(member => (
      <Congressperson member={member} key={member.id}/>
    ))
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
