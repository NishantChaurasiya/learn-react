const Time = ({elem}) => {
 

    const timeDate=elem?.time
    const timeOnly = timeDate.split(" ")[1]

    
    
  return (
    <div className='bg-[#a4cade]/70 p-5 flex flex-shrink-0 flex-col items-center rounded-md '>
    
        <img className='w-[45px ' src={elem?.condition?.icon} />
        <h4 className="font-bold text-[#25AFF4]">{elem?.temp_c}°c</h4>
        <h4 className='font-bold'>{elem?.condition?.text}</h4>
            <h2 className="font-bold ">{timeOnly}</h2>
    </div>
  )
}

export default Time