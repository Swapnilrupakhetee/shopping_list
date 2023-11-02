
import { useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const[tasks,setTasks]=useState([]);
  function addTask(name)
  {

  }
  return (
    <main>
      <div className="App">
      <TaskForm onAdd={name=>addTask(name)}/>
      <Task/>
      
      
    </div>
    </main>
    
  );
}

export default App;
