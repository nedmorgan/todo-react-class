import React, { Component } from 'react'

export default class ToDo extends Component {
  render() {
    return (
      <div>
        <div key={this.props.i} index={this.props.i}>
          <p>{this.props.title}</p>
          <button onClick={(e, index) => this.props.handleDelete(e, this.props.i)}>Delete</button>
        </div>
      </div >
    )
  }
}
