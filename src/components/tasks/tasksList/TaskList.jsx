import React from 'react';
import Task from './Task';
import {Link} from 'react-router-dom';

function TaskList({tasks}) {
   
    return (
        <div>
           {tasks.map(task => <Task key={task.id} task={task} />)} 
           <button> 
            <Link to='/addtask'>
                Add Task
            </Link>
           </button>
        </div>
    )
}

export default TaskList
