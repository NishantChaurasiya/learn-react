import { useState } from "react"

const App = () => {
  const [display, setDisplay] = useState(0)
  return (
    <div className="bg-black w-full flex flex-col gap-10 justify-center items-center h-screen text-white">
      <h1 >multiple-condtion</h1>
     <div className="flex flex-col gap-10">
       <button className="border w-[150px] py-5" onClick={()=>setDisplay(display + 1)}>change Image</button>
      {
        display === 0 ? <img className="w-[300px]" src="https://plus.unsplash.com/premium_photo-1699391583865-a81bb0769ccc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" />
        :display === 1 ? <img className="w-[300px]"  src="https://images.unsplash.com/photo-1757909075105-4dfed59112f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" /> 
        : display === 2 ? <img className="w-[300px]"  src="https://plus.unsplash.com/premium_photo-1757392183531-16c1990f7b43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" /> 
        :display===3 ? <img className="w-[300px]"  src="https://images.unsplash.com/photo-1755867712452-871192ab3b2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" /> 
        : display===4 ? <img className="w-[300px]"  src="https://images.unsplash.com/photo-1756916474895-bb296434aeeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" />
        :display===5 ? <img className="w-[300px]"  src="https://images.unsplash.com/photo-1756707106632-01149ea21183?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" />
        :"no image found"
      }
     </div>
    </div>
  )
}

export default App