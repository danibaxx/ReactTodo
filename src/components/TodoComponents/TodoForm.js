// Todo form in here
import React from 'react';

import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    console.log('Form Value', this.state.value)
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addTask(event, this.state.value);

    this.setState({
      value: ''
    });

    this.addTask(event, this.state.value);
  };

  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      task: this.state.tasks.filter(task => {
        return !task.completed
      })
    })
  }

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="todo-item">Add Todo: </Label>
            <Input 
              type="text" 
              name="todo" 
              placeholder="Todo"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button 
            outline color='success'
            size='sm'
          >
            Add Todo
          </Button>
          <Button 
            outline color='danger'
            size='sm'
            onClick={this.clearCompleted}
          >
              Clear Completed
          </Button>
        </Form>
      </div>
    );
  }
};

export default TodoForm;