import React, { Fragment } from 'react';
import { BrowserRouter as Router,Switch, Route,Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component= { Landing  } />
        <Switch>
          <Route exact path='/login' component={ Login } />
          <Route exact path='/register' component={ Register } />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
