import HomeVideo from "./HomeVideo"


const HomeHeroText = () => {
  return (
    <div className="text-[135px] flex items-center justify-center flex-col  tracking-0 leading-[130px] text-white  ">
      <div>THE SPARK FOR</div>
      <div className="flex items-center" >ALL <div className="w-[230px]   h-[14vh] rounded-[100px] overflow-hidden"><HomeVideo/></div> THINGS</div>
      <div>CREATIVE</div>
    </div>
  )
}

export default HomeHeroText