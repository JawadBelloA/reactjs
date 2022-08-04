import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { AddTask } from "./components/AddTask";

const App = () =>{
  const [tasks, setTasks] = useState([
      {
          id :1,
          text: "Lauch the app Tomorrow",
          day: '4th August at 10:30am',
          reminder:true,
      },
      {
          id: 2,
          text: "Push new changes to git",
          day: '5th August at 9:30am',
          reminder: true,
      },
      {
          id: 3,
          text: "Host the Website" ,
          day: '8th August at 7:30am',
          reminder: false,
      }
  ])
  // Delete task

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }
  // Toggle reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
  }
  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <AddTask />
      {tasks.length>0?<Tasks tasks={tasks}
      onDelete = {deleteTask} onToggle={toggleReminder}/>: 'No Tasks '}
    </div>
  )
}

export default App;
