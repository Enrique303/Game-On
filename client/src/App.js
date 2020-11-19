import React, { Fragment } from 'react';
import { BrowserRouter as Router,Switch, Route,Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Landing />
      </Fragment>
    </Router>
  );
}

export default App;
