import React, {useState} from 'react';
import TaskForm from './tasks/taskForm/TaskForm'

function App() {
    const [tasks, setTasks] = useState([]);
    console.log(tasks);
    return (
        <div>
           <TaskForm setTasks={setTasks} tasks={tasks}/> 
        </div>
    )
}

export default App
