import React, { useEffect, useState } from 'react'

function Recents() {

    const [recentTasks, setRecentTasks] = useState([])
    
    useEffect(() => {
        onTaskChange()
    }, [])
    
    const onTaskChange = () => {
        let json = localStorage.getItem("recentTasks")
        let parsedTasks = JSON.parse(json)
        setRecentTasks(parsedTasks)
    }

    return (
        <>
        <div className='text-center mt-5'> Recent Tasks </div>
        <div className='d-flex justify-content-center mt-3 gap-3'>
            <ul class="list-group" style={{width: 100,}}>
                {recentTasks ? 
                recentTasks.map((task) => {

                    return <li class="list-group-item">{task}</li>
                })
                : null
            }
            </ul>
        </div>
        </>
  )
}

export default Recents