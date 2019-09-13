import React from 'react';
import Task from './Task';
import {Link} from 'react-router-dom';

function TaskList(props) {
   console.log(props)
    return (
        <div>
          <ul>
           {props.tasks.map(task => <Task key={task.id} task={task} toggle={props.toggle} />)} 
          </ul>
           <button> 
            <Link to='/addtask'>
                Add Task
            </Link>
           </button>
           <button onClick={props.delete}>
               Delete Task 
           </button>
        </div>
    )
}

export default TaskList
