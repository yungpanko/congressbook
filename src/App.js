import React, { Component } from 'react';
import FindMyRepsSearch from './containers/FindMyRepsSearch'
import FindMyReps from './containers/FindMyReps'
import NavBar from './containers/NavBar.js'
import Home from './containers/Home.js'
import House from './containers/House.js'
import Senate from './containers/Senate.js'
import Bills from './containers/Bills.js'
import Header from './containers/Header'
import { Container } from 'semantic-ui-react'
import CongresspersonShow from './containers/CongresspersonShow'
import {
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Container>
          <Header />
          <NavBar />
            <Route exact path="/" component={Home}/>
            <Route exact path="/findmyreps" component={FindMyRepsSearch}/>
            <Route exact path="/house" component={House} />
            <Route exact path="/senate" component={Senate} />
            <Route exact path="/bills" component={Bills} />
          <Switch>
            <Route path ="/house/:id" render={({match})=> (<CongresspersonShow member={match.params.id}/>) }/>
            <Route path ="/senate/:id" render={({match})=> (<CongresspersonShow member={match.params.id}/>) }/>
            <Route path ="/findmyreps/:state/:district" render={({match})=> (<FindMyReps history= {this.props.history} districtState={match.params.state} districtCode={match.params.district}/>) }/>
          </Switch>
        </Container>
    );
  }
}

export default App;
