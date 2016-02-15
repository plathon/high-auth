import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistory, routeReducer, routeActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import * as reducers from './reducers'

import App from './components/App'
import Home from './components/Home'
import Auth from './containers/AuthContainer'
import Resgister from './containers/RegisterContainer'
import Article from './containers/ArticleContainer'

const history = browserHistory
const synchronizedHistory = syncHistory(history)
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
})

const enhancer = compose(
 applyMiddleware(synchronizedHistory),
 applyMiddleware(logger()),
 applyMiddleware(thunk)
)

const store = createStore(reducer, enhancer)
synchronizedHistory.listenForReplays(store)

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.default.auth.user,
  redirectAction: routeActions.replace,
  failureRedirectPath: '/signin',
  wrapperDisplayName: 'UserIsAuthenticated'
})

render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="signin" component={Auth}/>
          <Route path="signup" component={Resgister}/>
          <Route path="articles" component={UserIsAuthenticated(Article)}/>
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
)
