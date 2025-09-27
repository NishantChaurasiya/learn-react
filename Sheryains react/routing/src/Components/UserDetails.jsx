import { useNavigate, useParams } from "react-router-dom"

const UserDetails = () => {
    const {name} =useParams()
    const navigate=useNavigate()

    
  return (
    <div>
         <h1 className="text-3xl text-center mt-10 font-bold">User-details</h1>
        <div className="mt-20 flex items-center flex-col w-full gap-5">
        <h1 className="text-green-400 font-extrabold text-3xl">👋{name}</h1>
        <p className="w-[450px] leading-[20px] text-xl "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus numquam quo excepturi velit veritatis fugit sequi earum cum officiis commodi consequuntur quis illum doloremque aut, delectus dolor eum pariatur minus repellendus ducimus quisquam! Unde dolorem expedita quisquam ratione error, iste mollitia consequatur a quia repudiandae provident quod. </p>
        <button onClick={()=>navigate("/user")} className="cursor-pointer bg-black px-3 py-2 text-white">Go Back</button>
        </div>
    </div>
  )
}

export default UserDetails