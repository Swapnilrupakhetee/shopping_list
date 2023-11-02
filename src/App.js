
import { useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const[tasks,setTasks]=useState([]);
  function addTask(name)
  {
    setTasks(
      ...prev=>{
        return [...prev,{name:name,done:false}];
      }
    )

  }
  return (
    <main>
      <div className="App">
      <TaskForm onAdd={addTask}/>
      {tasks.map(task=>(
        <Task/>
      ))}
      
      
    </div>
    </main>
    
  );
}

export default App;
