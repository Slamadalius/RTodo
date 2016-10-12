import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/todoapp');
    }
    next();
};

export default (
    <Router history={hashHistory}>
      <Route path="/">
          <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
          <Route path="todoapp" component={TodoApp} onEnter={requireLogin}/>
      </Route>
    </Router>
);
