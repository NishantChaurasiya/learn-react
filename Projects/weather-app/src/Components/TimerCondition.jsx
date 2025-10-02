import Time from "./Time"

const TimerCondition = ({weather}) => {
  const time=weather?.forecast?.forecastday[0].hour
  

  return (
   <div  className="w-full rounded-md bg-white p-5" >
     <h2 className="text-3xl font-bold text-center">Today-ForeCast</h2>
    <div className="flex w-full gap-5  hide-scrollbar justify-center overflow-x-scroll p-5">
     
    {time?.map((elem,ind)=><Time elem={elem} key={ind} />)}
      </div>
   </div>
  )
}

export default TimerCondition