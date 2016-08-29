import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
      <h1>This is a shared header</h1><br/>

        <ul role="nav">
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
          <li><Link to="/building" activeClassName="active">Building</Link></li>
          <li><Link to="/todo" activeClassName="active">Todo</Link></li>
        </ul>


        {this.props.children}
      </div>
    )
  }
}
