import React from 'react'

function OneTask({task}) {
  return (
    <div className='one-task-wrapper'>
        <h4>{task.name}</h4> 
        <div>{task.time}</div>
        <div style={{fontSize:'smaller'}}>{task.desc}</div>
        <div style={{fontSize:'small'}}>{new Date().toDateString === new Date(task.date).toDateString ? '' : task.date}</div>
    </div>
  )
}

export default OneTask