import React, { Component } from 'react';
import FindMyReps from './containers/FindMyReps'
import NavBar from './containers/NavBar.js'
import Home from './containers/Home.js'
import House from './containers/House.js'
import Senate from './containers/Senate.js'
import Bills from './containers/Bills.js'
import Header from './containers/Header'
import { Container } from 'semantic-ui-react'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <Container>
        <div>
          <Header />
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/findmyreps" component={FindMyReps} />
          <Route exact path="/house" component={House} />
          <Route exact path="/senate" component={Senate} />
          <Route exact path="/bills" component={Bills} />
        </div>
      </Container>
      </Router>
    );
  }
}

export default App;
