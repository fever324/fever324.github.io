import App from './modules/App'
import Building from './modules/Building'
import Todo from './modules/Todo';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render((
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Building}/>
    <Route path="/building" component={Building}/>
    <Route path="/todo" component={Todo}>
      <Route path="/todo/:todoId" component={Todo}/>
    </Route>
  </Route>
  </Router>
), document.getElementById('app'))
