import HomeBottomText from "../Components/Home/HomeBottomText"
import HomeHeroText from "../Components/Home/HomeHeroText"
import HomePara from "../Components/Home/Homerightelement/HomePara"
import TopNav from "../Components/Home/Homerightelement/TopNav"
import HomeVideo from "../Components/Home/HomeVideo"

const Home = () => {
  return (
    <>
      <div>
        <div className="w-full h-screen fixed">
          <HomeVideo />
        </div>
        <div className="w-full h-screen relative flex flex-col justify-between items-center text-center">
          <HomeHeroText />
          <HomeBottomText />
        </div>
        <TopNav />

        <HomePara />

      </div>


    </>
  )
}

export default Home