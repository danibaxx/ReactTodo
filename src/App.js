import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  addTask = (event, taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };

    this.setState({
      tasks: [this.state.tasks, newTask]
    });
  };

  render() {
    return (
      <div>
        <h2>Dani's Todo List:</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
