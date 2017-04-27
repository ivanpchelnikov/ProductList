import React from 'react';
import ReactDOM from 'react-dom';

// Import react-router
import { Router, Route, browserHistory} from 'react-router'

// Import redux stuff
import {createStore, applyMiddleware} from 'redux';
import reducer from './state/index'
import thunk from 'redux-thunk'
import {Provider, connect} from 'react-redux';

// Import my app-specific pages
import {AppLayout} from './layout';
import {WelcomePage} from './pageWelcome'
import NotFound from './components/not-found';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

// Define all the routes
const routes = (
    <Route component={AppLayout}>
      <Route name="welcome" path="/welcome" component={WelcomePage} />
      <Route name="default" path="/" component={WelcomePage} />
      <Route path="*" component={NotFound} />
    </Route>
  )

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app'));
