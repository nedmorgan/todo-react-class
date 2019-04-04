import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo'

class App extends Component {
  state = {
    todoList: [],
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

  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <form action="">
          <label>Add New To-Do</label>
          <input
            type="text"
            name="content"
            onChange={this.handleChange}
            value={this.state.newToDo.content} />
          <button>Submit</button>
        </form>
        <ToDo newToDo={this.state.newToDo} />
      </div>
    );
  }
}

export default App;
