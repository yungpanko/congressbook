import React from 'react'

const Congressperson = ({ member }) => {
  return (
    <li>
        <p>
          {member.first_name + " " + member.last_name}
        </p>
      </li>
  )
}

export default Congressperson
