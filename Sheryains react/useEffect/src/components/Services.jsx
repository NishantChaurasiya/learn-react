import { useEffect, useState } from "react"


const Services = () => {
  const[firstData,setFirstData]=useState("small-data")
  const[secondData,setSecondData]=useState("large-data")
  useEffect(()=>{console.log("service  Component is created")
       
   return(()=>{
    console.log("Service Components is  Deleted");})

  },[])
  return (
    <>
     <p>{firstData}</p>
     <button onClick={()=>setFirstData("delete small data")} className=" px-3 py-2 bg-red-400">delete small data</button>
     <p>{secondData}</p>
     <button className=" px-3 py-2 bg-red-400"  onClick={()=>setSecondData("delete large data")} > delete large data</button>
    </>
  )
}

export default Services