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

import TopBar from './components/topBar/TopBar'
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

function validateAuth(nextState, replaceState){
  let state = store.getState()
  if ( !state.default.auth.jwtToken ) {
    replaceState(null, '/signin')
  }
}

render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        <Route path="signin" component={Auth}/>
        <Route path="signup" component={Resgister} onEnter={validateAuth}/>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
)
