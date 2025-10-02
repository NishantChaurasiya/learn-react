import axios from "axios"
import { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import TodayCondition from "./Components/TodayCondition";
import ForeCast from "./Components/ForeCast";
import TimerCondition from "./Components/TimerCondition";
const App = () => {
  const [city, setCity] = useState("bhopal")
  const[weather,setWeather]=useState("")

  
  const getWeatherData = async (city) => {
    try {
      const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=03056c2ce7ff4792a29125212250110&q=${city}&days=7&aqi=no&alerts=no`)
      setWeather(res.data)
    }
    catch (err) {
      console.log(err);
    }
  }
   

  useEffect(() => {
    getWeatherData(city)
  }, [city])
  return (
    <div className="bg-gray-400 font-sans  w-full h-screen">
      <Nav setCity={setCity} city={city} />
      <div className="p-5 flex flex-col gap-10">
        <div className="flex  justify-between">
          <TodayCondition  weather={weather} />
          <ForeCast weather={weather} />
        </div>
        <TimerCondition  weather={weather}  />
      </div>

    </div>
  )
}

export default App