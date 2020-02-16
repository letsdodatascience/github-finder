import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/layouts/NavBar';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
