import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { VscAccount } from "react-icons/vsc";
const Nav = ({ setCity }) => {
  const [inputVal, setInputVal] = useState("")
  const handleClick = () => {
    setCity(inputVal)
    setInputVal("")
  }
  return (
    <nav className=" w-full bg-white flex justify-between items-center  px-10 py-5  mx-auto ">
        <h1 className="text-3xl font-bold">Weather App</h1>
      <div className="w-[30%] bg-black/20 rounded-full  flex items-center gap-5 px-5 py-2">
        <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} className="w-full outline-none" type="text" placeholder="Enter city" />

        <span onClick={handleClick} className="cursor-pointer" >
          <FaSearch />
        </span>


      </div>

      <div className="text-3xl "><VscAccount /></div>
    

    </nav>
  )
}

export default Nav