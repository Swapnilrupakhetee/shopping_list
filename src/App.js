
import { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const[tasks,setTasks]=useState([]);

  useEffect(()=>{
    if(tasks === null ||tasks.length===0 )return;
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);

  useEffect(()=>{
    const tasks=JSON.parse(localStorage.getItem('tasks'));
    
    if (tasks !== null) {
      setTasks(tasks);
    }
  },[])

  function addTask(name){
    if(name==="") return alert('please enter task name');
    setTasks(prev=>{
        return [...prev,{name:name,done:false}];
      });
  }
  function updateTaskDone(taskIndex,newDone){
    setTasks(prev=>{
      const newTasks=[...prev];
      newTasks[taskIndex].done=newDone;
      return newTasks;

    })

  }
  function getMessage(){
    return'keep it going';

  }


  const numberComplete=tasks ? tasks.filter(t=>t.done).length:0;
  const numberTotal=tasks ? tasks.length : 0;
  


  return (
    <main>
      <h1>{numberComplete}/{numberTotal} complete</h1>
      <h2>{getMessage()}</h2>
      <div className="App">
      <TaskForm onAdd={addTask}/>
      {tasks&&tasks.map((tasks,index)=>(
        <Task {...tasks} onToggle={done=> updateTaskDone(index,done)}/>
      ))}
      
      
    </div>
    </main>
    
  );
}

export default App;
