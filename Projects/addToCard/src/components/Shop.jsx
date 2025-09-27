import { useContext } from "react"
import { CardContext } from "./Context"
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Shop = () => {
 const {card,removeFromCard}=useContext(CardContext)
  const navigate = useNavigate();



  return (
<div className="p-15  relative">
<span onClick={()=> navigate("/")} className="absolute top-5 left-[30px] text-5xl cursor-pointer ">
<IoMdArrowBack />
</span>
<div className="flex gap-15 flex-wrap justify-center">
  {card.length>0? card.map((cardProducts,id)=><div key={id} className="mt-15  w-[450px] flex flex-col gap-5 border-2  bg-gray-300 p-5 rounded-md">
<img src={cardProducts.image} className="rounded-md"/>
<div className="font-bold flex items-center justify-between">
<div>
    <h4>${cardProducts.price}</h4>
  <p>{cardProducts.title}</p>
</div>
  <button onClick={()=>removeFromCard(cardProducts.id)} className="bg-red-500 px-5 py-2 rounded-md text-white cursor-pointer">Romove</button>
</div>

</div>
) :<p className="text-2xl text-center mt-10 font-bold">no product in card...</p>}
</div>
</div>
  )
}

export default Shop