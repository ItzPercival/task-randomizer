import React from 'react'

function Recents({ allRecents }) {    


    return (
        <>
        <div className='text-center mt-5'> Recent Tasks </div>
        <div className='d-flex justify-content-center mt-3 gap-3'>
            <ul class="list-group text-center">
                {allRecents ? 
                allRecents.map((task) => {
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