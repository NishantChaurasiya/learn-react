import axios from "axios"
import { useState } from "react"
           
const App = () => {
const[products,setProducts]=useState([])

const getProduct=()=>{
     
  const productData="https://fakestoreapi.com/products"
  axios.get(productData).then(res=>setProducts(res.data))
 .catch(err=>console.log(err))
  
}
getProduct()
console.log(products);


  return (
    <div className=" bg-black text-white p-10 flex flex-col gap-20 relative w-full  min-h-screen ">
      <h1 className="text-center mt-10 font-bold text-5xl ">Products</h1>
    <div className="w-full flex flex-wrap  gap-15 justify-evenly">
      {products.length>0?products.map((p,index)=><div key={index} className="shadow-xl/20 bg-gray-900   overflow-hidden rounded-xl flex flex-col gap-3">
      <div className=" bg-zinc-300 p-5">  <img className="h-[330px]" src={p.image} /></div>
        <div className=" flex flex-col gap-1 p-5 ">
             
           <div className="flex justify-between items-center">
             <h2 className="text-xl">$ <span className="font-bold"> {p.price}</span> </h2>
              <span className="text-[12px] font-bold px-3">{p.rating.count}+</span>
           </div>
          <h4 className="font-bold">Rating: <span className={`${p.rating.rate>3? "text-green-500":"text-red-500" }`}>{p.rating.rate}</span></h4>
          <p className="w-[300px]">  <span className="font-bold">Description:</span>  {p.title} </p>
        </div>
      </div>)
      :<p className="font-bold">Loading...</p> }
    </div>
    </div>


  )
}

export default App