
import { useState } from "react"
import Input from "./components/input"
import TaskSection from "./components/TaskSection"


const App = () => {
  const [todo, setTodo] = useState([])
  

  return (
    <div className="w-full min-h-[1000vh]  flex flex-col gap-5 pt-[100px] pb-[50px] items-center bg-black">
      <Input setTodo={setTodo} todo={todo}/>
      <TaskSection  todo={todo} />
    </div>
  )
}

export default App