import { useState } from 'react';
import './App.css';
import { Task } from './task';

function App(){
  const[inputValue,setinputValue]=useState("")
  const [todolist,settodolist]=useState([])

  const inputValueHandler=(event)=>{
      setinputValue(event.target.value)
  }
    

  const Dolist=()=>{
    const task={
      id:todolist.length===0?1:todolist[todolist.length-1].id+1,
      taskName:inputValue,
      completed:false,
    }
    settodolist([...todolist,task])
    setinputValue(inputValue)
  }
  const deleteTask=(id)=>{
    
    settodolist(todolist.filter((task)=> task.id!==id))
  }
  const completeTask=(id)=>{
    settodolist(
      todolist.map((task)=>{
        if(task.id===id){
          return {...task,completed:true}
        }
        else{
          return task;
        }
      })
    )
      }
  return (
    <div className="App">
      <div className='header'>
        <h1>To-Do-List</h1>
        </div>

      <div className='container'>
          <input onChange={inputValueHandler} placeholder='Enter your task'/>
          <button onClick={Dolist}>Add Task</button>
      </div>
      <div className='list'>
          {todolist.map((value)=>{
              return<Task taskName={value.taskName} id={value.id} deleteTask={deleteTask} completeTask={completeTask} completed={value.completed} />
          })}
      </div>
    </div>
  );
}

export default App;
