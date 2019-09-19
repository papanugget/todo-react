import React from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoEntry: 'emptry string',
      todoList: [
        {
          task: 'walk the dog',
          complete: false,
          important: true,
        },
        {
          task: 'eat lunch',
          complete: true,
          important: false,
        },
        {
          task: 'take a bath',
          complete: false,
          important: false,
        },
        {
          task: 'poop',
          complete: true,
          important: true,
        },
      ],
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="h1 mb-3 font-weight-normal">Basic ToDo App</h1>

            <CreateToDo todoEntry={this.state.todoEntry}/>

          </div>
          <div className="col">
            <h1 className="h1 mb-3 font-weight-normal">Current Tasks</h1>
            <ToDoList todoList={this.state.todoList}/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
