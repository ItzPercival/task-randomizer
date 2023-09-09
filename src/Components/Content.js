import React, { useState, useEffect } from 'react'
import Tasks from './Tasks.js'
import Recents from './Recents.js'

function Form() {
  const [data, setData] = useState("")
  const [allTasks, setAllTasks] = useState([])
  const [allRecents, setRecents] = useState([])
  
  const disabled = allTasks.length === 3 ? true : false
  
  useEffect(() => {
    onRecentChange()
    const jsonTasks = sessionStorage.getItem('tasks');
    if (jsonTasks) {
      setAllTasks(JSON.parse(jsonTasks));
    }
  }, []); 
  
  const handleInput = (event) => {
    setData(event.target.value)
  }

  const onRecentChange = () => {
    let json = localStorage.getItem("recentTasks")
    let parsedTasks = JSON.parse(json)
    setRecents(parsedTasks)
}

  const removeTasks = () => {
    setAllTasks([])
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.length === 0) {
      alert("please write")
    }
    let tasks = [];
    if (sessionStorage.getItem('tasks')) {
      let json = sessionStorage.getItem('tasks');
      tasks = JSON.parse(json);
    }
    tasks = [...tasks, data];
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
    setAllTasks(tasks)
    setData('')
  }

  return (
    <>
      <div className='d-flex flex-column '>
        <div className="alert alert-dark text-center mx-auto mt-4 mb-5" style={{width: 700,}} role="alert">
            Welcome to random selection. Please add up to 3 things you want us to select for you randomly.
        </div>
        <form onSubmit={handleSubmit} className='mx-5'>
          <div className="input-group mb-3">
            <input onChange={handleInput} value={data} type="text" className="form-control" placeholder="Task"/>
            <button className="btn btn-outline-secondary" type="submit" disabled={disabled}>Plug it in</button>
          </div>
        </form>
      </div>
      <Tasks updateRecents={onRecentChange} allTasks={allTasks} removeTasks={removeTasks}/>
      <Recents allRecents={allRecents}/>
    </>
  )
} 

export default Form