import { useContext } from "react"
import { CardContext } from "./Context";


const Product = ({elem}) => {
  const {addToCard}=useContext(CardContext)
  
  return (

    <div className="w-[450px] border-2 p-3 rounded-md bg-gray-300">
      <img src={elem.image} className="w-full rounded-md"/>
     <div className="font-bold mt-5">
             <h4>${elem.price}</h4>
      <h4 className={elem.rating>3?"text-green-600":"text-red-600"}>{elem.rating}</h4>
      <div className="flex justify-between mt-2">
   
         <p className="text-xl w-[70%]">{elem.title}</p>
         <button onClick={()=>addToCard(elem)} className="bg-gray-500 px-3 py-2 cursor-pointer text-white rounded-md hover:bg-gray-600">Shop Now</button>
      </div>
    
     </div>
    </div>
  )
}

export default Product