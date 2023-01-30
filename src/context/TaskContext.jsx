import { createContext, useEffect, useState } from "react"
// import { data } from "../data/data"

export const TaskContext = createContext()


export const TaskContextProvider = (props) => {
    
  const [tasks, setTasks] = useState(() => {
    const savedItem = localStorage.getItem("tasks");
   const parsedItem = JSON.parse(savedItem);
   return parsedItem || "";
   });

  const createTask = (task) => {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description,
    }])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter( task => task.id !== taskId))
  }


  useEffect(() => {
    setTasks(tasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks) || [])
  }, [tasks])
  

  return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask,
    }}>{props.children}</TaskContext.Provider>
  )
}
