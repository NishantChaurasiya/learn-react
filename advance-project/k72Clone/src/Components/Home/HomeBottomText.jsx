import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div className="flex gap-10  items-center mb-3 font-bold text-white ">
      <Link to="/Work" className="border-3 flex leading-[100px]  rounded-[100px] px-7 pt-2  text-[6.5rem] hover:text-[#D3FD50] ">WORK</Link>
      <Link to="/Agency" className="border-3 flex leading-[100px]  rounded-[100px] px-7 pt-2  text-[6.5rem] hover:text-[#D3FD50]  ">AGENCY</Link>
    </div>
  )
}

export default HomeBottomText