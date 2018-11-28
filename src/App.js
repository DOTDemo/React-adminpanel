import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './component/login/index';
import Forget from './component/login/forget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/forget" component={Forget} />
          </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
