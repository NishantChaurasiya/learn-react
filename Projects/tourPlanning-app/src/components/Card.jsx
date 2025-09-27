
const Card = ({ elem,setRealData,index }) => {
    const handleClickEvent=()=>{
        return  setRealData((previous)=>previous.filter((item,i)=>i!==index))
    }

    return (
        <div className=" w-[450px] border border-gray-600 bg-gray-900/10 p-3 rounded-md flex flex-col gap-3">
            <img src={elem.image_url} className="w-full rounded-md" />
            <h2 className="text-2xl font-bold text-green-600">₹{elem.one_day_budget_inr}/day</h2>
            <h2 className="text-2xl font-bold">{elem.name}</h2>
            <p className="leading-[16px]">{elem.description}</p>
            <button onClick={()=>handleClickEvent()} className="border-red-900 border-2 bg-red-200 text-black font-bold cursor-pointer px-5 py-3 rounded-md hover:bg-red-600">Not Interested</button>
        </div>
    )
}
export default Card