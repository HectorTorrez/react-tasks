import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext";

export const TaskForm = () => {

    const {createTask} = useContext(TaskContext)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')


    const handleChangeTitle = ({target}) => {
        setTitle(target.value);
        
    }
    const handleChangeDescription = ({target}) => {
        setDescription(target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        createTask({
            title,
            description
        })
        setTitle('')
        setDescription('')
    }
  return (
    <div className="max-w-md m-auto">
        <form onSubmit={ handleSubmit } className="bg-slate-800 p-10 mb-4">
            <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
            className="bg-slate-300 p-3 w-full mb-2" 
            placeholder="Escribe una tarea"
            type="text"
            onChange={ handleChangeTitle }
            value={title}
            autoFocus
         />
         
         <textarea
         className="bg-slate-300 p-3 w-full mb-2" 
         onChange={handleChangeDescription}
         placeholder="Escribe una descripcion"
         value={description}
         >

         </textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">
            send
        </button>
    </form>
    </div>
  )
}
