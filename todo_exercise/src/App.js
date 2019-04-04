import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo'

class App extends Component {
  state = {
    toDoList: [],
    newToDo: {
      content: ''
    }
  }

  handleChange = (e) => {
    const newToDo = { ...this.state.newToDo }
    newToDo[e.target.name] = e.target.value
    this.setState({ newToDo })
  }

  addToDo = () => {
    const toDoList = [...this.state.toDoList]
    let content = this.state.newToDo.content
    toDoList.push(content)
    this.setState({ toDoList, newToDo: {} })
  }

  handleDelete = (e, index) => {
    e.preventDefault()
    let toDoList = [...this.state.toDoList]
    toDoList.splice(index, 1)
    this.setState({ toDoList })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    this.addToDo()
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <form onSubmit={this.handleSignUp}>
          <label>Add New To-Do</label>
          <input
            type="text"
            name="content"
            onChange={this.handleChange}
            value={this.state.newToDo.content} />
          <button>Submit</button>
        </form>
        {
          this.state.toDoList.map((todo, i) => {
            return (
              <ToDo
                key={i}
                index={i}
                title={todo}
                toDoList={this.state.toDoList}
                handleDelete={this.handleDelete} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
