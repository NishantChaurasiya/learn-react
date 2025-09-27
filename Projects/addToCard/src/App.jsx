import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Shop from "./components/Shop"
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CardContext } from "./components/Context";
const App = () => {
  const {card}=useContext(CardContext)
  
  return (
  <>
    <nav className="bg-gray-800 flex justify-between px-10 py-5 text-4xl w-full text-white">
      <Link to="/">Dummyshop</Link>
      <Link to="/Shop"><div className="w-[25px] right-7 font-bold absolute top-3 rounded-[50%] text-[15px] flex justify-center items-center h-[25px] bg-red-800">{card.length}</div> <FaCartShopping/></Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/shop" element={<Shop/>}></Route>
    </Routes>
  </>
  )
}

export default App