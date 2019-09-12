import React from 'react';
import Task from './Task';

function TaskList({tasks}) {
    const tempArr = [1,2,3]
    return (
        <div>
           {tasks.map(task => <Task key={tasks.id} task={task} />)} 
        </div>
    )
}

export default TaskList
