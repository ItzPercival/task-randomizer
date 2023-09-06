import React, { useState, useEffect } from 'react'
import Tasks from './Tasks.js'

function Form() {
  const [data, setData] = useState("")
  const [allTasks, setAllTasks] = useState([])
  
  const button = <button className="btn btn-outline-secondary" type="submit" disabled>Plug it in</button>
  
  useEffect(() => {
    const jsonTasks = sessionStorage.getItem('tasks');
    if (jsonTasks) {
      setAllTasks(JSON.parse(jsonTasks));
    }
  }, []); 
  
  const handleInput = (event) => {
    setData(event.target.value)
  }

  const removeTasks = () => {
    setAllTasks([])
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(allTasks)
    let tasks = [];
    if (sessionStorage.getItem('tasks')) {
      let json = sessionStorage.getItem('tasks');
      tasks = JSON.parse(json);
    }
    tasks = [...tasks, data];
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
    setAllTasks(tasks);
  }

  return (
    <>
      <div className='d-flex flex-column '>
        <div className="alert alert-dark text-center mx-auto mt-4 mb-5" style={{width: 700,}} role="alert">
            Welcome to random selection. Please add up to 3 things you want us to select for you randomly.
        </div>
        <form onSubmit={handleSubmit} className='mx-5'>
          <div className="input-group mb-3">
            <input onChange={handleInput} type="text" className="form-control" placeholder="Task"/>
            {data === "" || allTasks.length === 3 ? button : <button className="btn btn-outline-secondary" type="submit">Plug it in</button>}
          </div>
        </form>
      </div>
      <Tasks allTasks={allTasks} removeTasks={removeTasks}/>
    </>
  )
}

export default Form