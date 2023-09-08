import React, { useState } from 'react'

function Tasks({ allTasks, removeTasks }) {

    const [clicked, setClicked] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null);
    
    const handleClick = (e) => {
        e.preventDefault()
            setClicked(true)
            const number = Math.floor(Math.random() * allTasks.length);
            setSelectedTask(allTasks[number])
            let tasks = [];
            if(localStorage.getItem('recentTasks')){
                let json = localStorage.getItem("recentTasks")
                tasks = JSON.parse(json) 
            }
            console.log(tasks)
            tasks.unshift(allTasks[number])
            if(tasks.length === 6){
                tasks.pop()
            }
            localStorage.setItem("recentTasks", JSON.stringify(tasks))
    }
    
    const handleReload = (e) => {
        e.preventDefault()
        sessionStorage.clear()
        removeTasks()
        setClicked(false)
    }

    return (
        <>
            <div className='d-flex justify-content-around mt-5'>
                {allTasks.length !== 0 ? (
                    allTasks.map((task, i) => {
                    if(task === selectedTask && clicked === true){
                        return ( 
                        <div className="card" key={i}>
                            <div className="card-body bg-success" style={{transition: 1.5,}}>
                                <h5 className="m-1 card-title">{task}</h5>
                            </div>
                        </div>
                    )
                    } else {
                        return (
                        <div className="card" key={i}>
                            <div className="card-body">
                                <h5 className="m-1 card-title">{task}</h5>
                            </div>
                        </div>
                        )
                    }
                })
                ) : (
                    <div>Nothing</div>
                )
            }
            </div>
            <div className='mt-5 d-flex justify-content-center gap-2'>
                <button onClick={handleClick} type="button" className="btn btn-secondary">Choose</button>
                <button onClick={handleReload} type="button" className="btn btn-secondary">Reload</button>
            </div>
      </>
    );
  }
  
export default Tasks