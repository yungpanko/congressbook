import React from 'react'

const GoogleMap = ({ url }) => {
  let map = null
  if (!!url === true) {
    map = (
      <div>
      <img src={url} alt='map'/>
    </div>
    )
  }
  return map
}

export default GoogleMap
