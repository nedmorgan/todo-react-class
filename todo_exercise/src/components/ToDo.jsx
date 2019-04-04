import React, { Component } from 'react'

export default class ToDo extends Component {
  render() {
    return (
      <div>
        {
          this.props.toDoList.length >= 1 ?
            this.props.toDoList.map(todo => {
              return (
                <div>
                  <p>{todo}</p>
                  <button>Delete</button>
                </div>
              )
            }) : null
        }
      </div>
    )
  }
}
