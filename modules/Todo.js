import React from 'react'
import { Link } from 'react-router'


export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <p>hihihi</p>
        <Link to="/">Home Page</Link>

        <p>{this.props.params.todoId}</p>
      </div>
    )
  }
}
