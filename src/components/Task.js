import React from 'react'

export const Task = ({task , onDelete, onToggle}) => {
  return (
    <div 
    className={`task ${task.reminder ? 'reminder' : ''}`}
     onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text}  <span className='delete'
         onClick={() => onDelete(task.id)}
         >&times;</span></h3>
        <p>{task.day}</p>
    </div>
  )
}
