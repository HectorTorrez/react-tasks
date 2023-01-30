import { TaskForm } from "./components"
import { TaskList } from "./components"


export const App = () => {


  return(
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm/>
        <TaskList />
      </div>
    </main>
  )

}
