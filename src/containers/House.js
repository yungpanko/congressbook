import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CongresspersonShow from './CongresspersonShow'

const House = () => {
  return (
    <div className="mainContent">
  <Switch>
    <Route path ="/house/:id" render={({match})=> (<CongresspersonShow />) }/>
  </Switch>
</div>
  )
}

export default House;
