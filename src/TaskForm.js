import React, { useState } from 'react'

function TaskForm({onAdd}) {
    const[taskName,setTaskName]=useState('');
    function handleSubmit(e) {
        e.preventDefault();
        onAdd(taskName);
        setTaskName('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <button>+</button>
        <input type="text" 
        value={taskName} 
        onChange={(e)=>setTaskName(e.target.value)} placeholder='your next task'>

        </input>
      </form>
    </div>
  )
}

export default TaskForm