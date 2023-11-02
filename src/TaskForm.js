import React, { useState } from 'react'

function TaskForm() {
    const[taskName,setTaskName]=useState('');
  return (
    <div>
        <form>
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