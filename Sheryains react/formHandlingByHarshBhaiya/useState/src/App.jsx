import { useState } from "react"

const App = () => {
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    number: ""
  })
  return (
    <div className="w-full h-screen bg-cover bg-center  flex justify-center bg-[url(https://images.unsplash.com/photo-1757664712627-868519088717?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8)] items-center ">
      <form onSubmit={(e) => {

        e.preventDefault()

      }} className="w-[350px] flex flex-col gap-5 bg-white/40 rounded-md p-5">
        <label htmlFor="name">
          name:
          <input onChange={(e) => {
            setInpVal({ ...inpVal, name: e.target.value })
             console.log(inpVal);
          }} value={inpVal.name} className="border w-full px-3" type="text" id="name" placeholder="Enter your name" />
        </label>
        <label htmlFor="email">
          email:
          <input onChange={(e) => {
            setInpVal({ ...inpVal, email: e.target.value })
             console.log(inpVal);
          }} value={inpVal.email} className="border w-full px-3" type="email" id="email" placeholder="Enter your email" />
        </label>
        <label htmlFor="number">
          number:
          <input onChange={(e) => {
            setInpVal({ ...inpVal, number: e.target.value })
             console.log(inpVal);
          }} value={inpVal.number} className="border w-full px-3" type="number" id="number" placeholder="Enter your number" />
        </label>
        <input type="submit" onClick={() => setInpVal({
          name: "",
          email: "",
          number: ""
        }

        )} className="bg-green-500 rounded-md text-white font-bold py-3" />
      </form>
    </div>
  )
}

export default App
