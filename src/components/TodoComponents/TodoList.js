// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import data from '../../data';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state= {
      tasks: data
    }
  }

  toggleTask = (event, taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          console.log("TodoList Task", task)
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return(
      <div>
        <div className='todo-list'>
          {this.state.tasks.map(task => (
            <Todo 
              key={task.id}
              tasks={task}
              onClick={event => this.toggleTask(event, task.id)}
            />
          ))}
            <TodoForm addTask={this.addTask}/>
        </div>
      </div>
    );
  }
};

export default TodoList;
