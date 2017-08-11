import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import createBrowserHistory from 'history/createBrowserHistory'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={App}/>
  </Router>,
  document.getElementById('root'))
