import {Link, Outlet} from "react-router-dom"
const User = () => {
  return (
    <div className="text-center w-full h-screen flex flex-col gap-10">
      <h1 className="mt-10 font-bold text-5xl">User</h1>
    <div className=" items-center justify-center flex gap-5 font-bold text-2xl">
        <Link className="px-5 py-3  bg-red-500 rounded-md transition-all duration-150 hover:scale-[1.2]" to="/user/Harsh" >Harsh</Link>
      <Link className="px-5 py-3  bg-red-500 rounded-md transition-all duration-150 hover:scale-[1.2]" to="/user/Avinash" >Avinash</Link>
      <Link className="px-5 py-3  bg-red-500 rounded-md transition-all duration-150 hover:scale-[1.2]" to="/user/Lohiya" >Lohiya</Link>
      <Link className="px-5 py-3  bg-red-500 rounded-md transition-all duration-150 hover:scale-[1.2]" to="/user/Vivek" >Vivek</Link>
    </div>
    <Outlet/>
    </div>
  )
}

export default User