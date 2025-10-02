import ForeCastDay from "./ForeCastDay"


const ForeCast = ({weather}) => {

  
  const forCastDay=weather?.forecast?.forecastday
 
  
  
  return (
  <div className="w-[30%] p-5 font-bold flex flex-col gap-2 rounded-md bg-white ">
    <h2 className="text-center ">3-day-forecast</h2>
   {
      forCastDay?.map((elem,ind)=><ForeCastDay key={ind} elem={elem} />)
   }
  </div>
  )
}

export default ForeCast