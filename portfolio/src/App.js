import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route />
            <Route />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
