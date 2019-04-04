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
        <ToDo
          toDoList={this.state.toDoList} />
      </div>
    );
  }
}

export default App;
