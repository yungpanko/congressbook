import React from 'react'

const LinkToDistrictMap = ({ state, district }) => {
  return (
    <div>
      <a href={`https://mappingsupport.com/p/gmap4.php?congress=${state},${district}`}
        target="_blank"
        rel="noopener noreferrer">
        Link to District Map
      </a>
    </div>
  )
}

export default LinkToDistrictMap
