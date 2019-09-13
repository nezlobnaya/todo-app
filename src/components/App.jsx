import React, {useState, useEffect } from 'react';
import TaskForm from './tasks/taskForm/TaskForm'
import TaskList from './tasks/tasksList/TaskList';
import { Route, Switch } from 'react-router-dom';


function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (tasks.length === 0 ) {
            if (localStorage.getItem('tasks')) {
             setTasks(JSON.parse(localStorage.getItem('tasks'))); //because local storage stores it in local obj, we need to parse it before we get it
            }
         }   
         // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        if (localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks').length !== tasks.length)) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        // eslint-disable-next-line
    }, [tasks.length])

    return (
        <div>
         <Switch>
         <Route path='/addtask' render={props => <TaskForm {...props} setTasks={setTasks} tasks={tasks} />} />
             <Route exact path='/' render={props => <TaskList {...props} tasks={tasks} />} />
         </Switch>
        </div>
    )
}

export default App
