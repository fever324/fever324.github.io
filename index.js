
//
// ReactDOM.render((
//    <Router>
//       <Route path = "/" component = {Building}>
//          <IndexRoute component = {Building} />
//          <Route path = "Todo" component = {Todo} />
//       </Route>
//    </Router>
//
// ), document.getElementById('container'))
import App from './modules/App'
import Building from './modules/Building'
import Todo from './modules/Todo';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Building}/>
    <Route path="/todo" component={Todo}/>
  </Router>
), document.getElementById('app'))
