import { useState } from "react";
import data from "../../data.json"
import Card from "./Card";
const BoxContainer = () => {


  const [realData, setRealData] = useState(data)

  
  return (
    <div className="w-full flex flex-wrap gap-5 justify-between  p-5  ">
     { realData.map((elem,index)=>(
      <Card elem={elem} key={index} index={index} setRealData={setRealData}/>
     ))}
    </div>
  )
}

export default BoxContainer
