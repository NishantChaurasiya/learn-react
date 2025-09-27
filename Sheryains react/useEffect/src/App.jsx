
import { Link, Route, Routes } from "react-router-dom"
import Products from "./components/Products"
import Home from "./components/Home"
import Services from "./components/Services"

const App = () => {
  return (
    <>
<div className="w-full min-h-screen flex flex-col gap-5 items-center text-black py-12 bg-zinc-400">
        <nav className="w-full bg-black/20 font-bold   max-w-[300px] flex justify-evenly relative   rounded-[100px] px-3 py-2">
        <Link to="/">Home</Link>
        <Link to="/Products">Projects</Link>
        <Link to="/Services">Services</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
</div>
    </>
  )

}

export default App