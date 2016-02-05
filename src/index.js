import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import * as reducers from './reducers'
import { Router, Route, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { syncHistory, routeReducer } from 'react-router-redux'

import Auth from './containers/AuthContainer'
import Resgister from './containers/RegisterContainer'

const history = createHistory()
const synchronizedHistory = syncHistory(history)
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
})

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk, synchronizedHistory ] :
  [ thunk, logger(), synchronizedHistory ]

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
const store = createStoreWithMiddleware(reducer)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Auth}/>
      <Route path="signin" component={Auth}/>
      <Route path="signup" component={Resgister}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
