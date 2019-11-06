// map will be in here---maybe?
import React from 'react';

const Todo = (props) => {
  console.log('Todo Props', props)
  return(
    <div 
      className={`tasks${props.tasks.completed ? ' completed' : ''}`}
    >
      <p>{props.tasks.task}</p>
    </div>
  );
};

export default Todo;