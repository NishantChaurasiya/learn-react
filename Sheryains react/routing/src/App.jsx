
import{NavLink, Route, Routes} from "react-router-dom"
import User from "./Components/User"
import About from "./Components/About"
import Home from "./Components/Home"
import UserDetails from "./Components/UserDetails"
const App = () => {
  return (
  <>
      <nav className="flex gap-10 justify-center mt-[20px] ">
        <NavLink className={({isActive})=>isActive?"text-amber-300":"text-black"} 
        to="/">Home</NavLink>
         <NavLink className={({isActive})=>isActive?"text-amber-300":"text-black"}  to="/About">About</NavLink>
         <NavLink className={({isActive})=>isActive?"text-amber-300":"text-black"}  to="/user">user</NavLink>
       </nav>
       <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
           <Route path="/user" element={ <User/>}>
                 <Route path="/user/:name" element={ <UserDetails/>}/>
           </Route>
        
       </Routes>

    </>
  )
}

export default App