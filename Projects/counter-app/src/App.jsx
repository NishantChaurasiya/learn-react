import { useState } from "react"

const App = () => {
  const[count,setCount]=useState(0)
  const handleIncreseBtn=()=>{
        if(count<10){
           setCount(count+1)
      }
  }
  const handleDecreseBtn=()=>{
          if(count>0){
           setCount(count-1)
      }
  }
    const handleResetBtn=()=>{
        
           setCount(0)
  }
  return (
  <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
      <div className="text-5xl">{count}</div>
    <div className="flex gap-5">
      <button className="text-2xl cursor-pointer  px-5 py-3 bg-green-500" onClick={handleIncreseBtn}>Increase</button>
      <button  className="text-2xl cursor-pointer  px-5 py-3 bg-yellow-500" onClick={handleResetBtn} >Reset</button>
      <button className="text-2xl cursor-pointer px-5 py-3 bg-red-500" onClick={handleDecreseBtn}>Decrease</button>
    </div>
  </div>
  )
}

export default App