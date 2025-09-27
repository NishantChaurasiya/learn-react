import axios from "axios"
import { useEffect, useState } from "react"

const Products = () => {
const[data,setData]=useState([])
const getProjectData=()=>{
  const projectData="https://fakestoreapi.com/products"
  axios.get(projectData).then(res=>setData(res.data))
  .catch(err=>console.log(err))
}




useEffect(()=>{
getProjectData()
},[])

  return (
  <>
      <h1 className=" text-5xl font-bold">Products</h1>

      <div className="w-full flex gap-20 justify-center  flex-wrap pt-10">
          {data.length>0? data.map((product,index)=><div key={index} className=" border-white w-[300px] p-5 rounded-md gap-5 bg-gray-600/60 flex flex-col">
              <img className="h-[200px]" src={product.image} />
            <div className="flex flex-col gap-2 font-bold">
                <h4>${product.price}</h4>
              <h4>Rate: <span className={product.rating.rate>3? "text-green-800":"text-red-800"}>{product.rating.rate}</span>    </h4>
              <p className="leading-[16px]">{product.title}</p>
            </div>
            </div>) :<p className=" text-center pt-10 font-bold">Loading....</p>}
      </div>
 
    </>
  )
}

export default Products