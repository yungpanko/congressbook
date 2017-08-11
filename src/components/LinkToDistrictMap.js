import React from 'react'

const LinkToDistrictMap = ({ state, district }) => {
  let link = null
  if (state && district) {
    link = (
      <div>
        <a href={`https://mappingsupport.com/p/gmap4.php?congress=${state},${district}`}
          target="_blank"
          rel="noopener noreferrer">
          Link to District Map
        </a>
      </div>
    )
  }

  return link
}

export default LinkToDistrictMap
