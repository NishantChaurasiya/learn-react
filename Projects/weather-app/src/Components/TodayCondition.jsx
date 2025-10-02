
import Condition from './Condition';

const TodayCondition = ({ weather }) => {

   

    const conditionObj=[
        {key:"Wind",value:weather?.current?.wind_mph},
        {key:"Humidity",value:weather?.current?.humidity},
        {key:"RealFeel",value:weather?.current?.feelslike_c}
    ]


    return (
        <div className="w-[45%]  p-5 rounded-md bg-white flex flex-col gap-10  ">
          <div className='flex justify-between'>
              <h2 className='text-3xl font-bold'>{weather?.location?.name}</h2>
            <div>
                <div className='flex gap-5 items-center'>
                    <img src={weather?.current?.condition?.icon} />
                    <div className='flex  text-center font-bold flex-col'>
                        <span>{weather?.current?.temp_c}°C</span>
                        <span>{weather?.current?.condition?.text}</span>
                    </div>
                </div>
              
            </div>
          </div>
            <div className='flex w-full justify-around font-bold text-center'>
                    {conditionObj.map((elem,ind)=><Condition elem={elem} key={ind}  />)}
                </div>
        </div>
    )
}

export default TodayCondition