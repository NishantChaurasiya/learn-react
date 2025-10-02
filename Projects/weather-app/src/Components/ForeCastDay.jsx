const ForeCastDay = ({elem}) => {
    console.log(elem?.day?.condition?.icon);
    
  return (
    <div className="flex gap-10 items-center justify-center">
        <h2>{elem?.date==="2025-10-02"?"yesterday":elem?.date==="2025-10-03"?"Saturday":"Sunday"}</h2>
        <div className="flex text-[#25AFF4]">
            <h2>{elem?.day?.mintemp_c}°c</h2>-<h2>{elem?.day?.maxtemp_c}°c</h2>
        </div>
        <img src={elem?.day?.condition?.icon}/>
    </div>
  )
}

export default ForeCastDay