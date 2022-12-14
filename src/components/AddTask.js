import { useState } from "react"

export const AddTask = () => {
  
    const[text, setText]= useState('')
    const[day, setDay]= useState('')
    const[reminder, setReminder]= useState(false)

  return (
    <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input 
            type="text" 
            placeholder="Add task" 
            
             
             />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type='text' placeholder="Add Day & Time"
           
            />
        </div>
        <div className="form-control-check" >
            <label>Set Reminder</label>
            <input 
            type='checkbox' 
            />
        </div>
        <input className="btn btn-block" type="submit" value="Save task"/>
    </form>
  )
}
