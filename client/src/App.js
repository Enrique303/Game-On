import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router,Switch, Route,Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/Profile';
import Home from './components/Home';
import PrivateRoute from './routing/PrivateRoute';
import Alert from './components/Alert';
import { Provider } from 'react-redux';
import store from './store';
import { userLoaded } from './actions/register';
import setToken from './utils/setToken';


if (localStorage.token) {
  setToken(localStorage.token)
}

const App = () => {
  useEffect(()=>{
    store.dispatch(userLoaded());
  },[] );

  return (
    <Provider store ={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component= { Landing  } />
          <Navbar />
          <Route exact path="/myprofile" component= { Profile  } />
          <Alert />
          <Switch>
            <Route exact path='/login' component={ Login } />
            <Route exact path='/register' component={ Register } />
            <PrivateRoute exact path='/home' component={ Home } />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
