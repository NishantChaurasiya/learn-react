import { useContext } from "react"
import { UserContext } from "./UseContext"

const App = () => {
  const {myName}=useContext(UserContext)
    const {yourName}=useContext(UserContext)
  return (
    
    <div>
      {myName}
    {yourName}
    </div>
  )
}

export default App