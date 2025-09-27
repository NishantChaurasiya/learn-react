import { useState } from "react"
const Input = ({ setTodo, todo }) => {
  const [inpVal, setInpVal] = useState("")


const handleInputEvent=(e)=>{
setInpVal(e.target.value)

}

  return (
    <div className="border rounded-[100px] border-white  w-[550px] flex justify-between overflow-hidden">
      <input onChange={(e) => handleInputEvent(e)} value={inpVal} type="text" className="w-full bg-gray-600 px-[10px] outline-none " placeholder="Please enter task...." />
      <button onClick={() => {
        const trimmed = inpVal.trim()
        if (
          trimmed !== ""
        ) {
          if (!todo.includes(trimmed)) {
            setTodo([...todo, trimmed]);
            setInpVal("")
          } else {
            alert("Enter a different task...")
            setInpVal("")
          
          }
        } else {
          alert(" Enter  something...")

        }
      }} className="font-bold outline-none py-[10px] w-[150px] bg-blue-400 text-black cursor-pointer">Add</button>
    </div>
  )
}

export default Input