
const TaskSection = ({ todo}) => {


  return (
    <div className={`w-[700px] bg-gray-600 rounded-md  flex p-5 flex-col gap-5`}>
      {todo.map((elem, index) =><div key={index} className="gap-4 flex items-center"> <h1 key={(index)} className={`border p-3  border-gray-700 text-gray-900" rounded-md`}>{elem}</h1></div>)}
    </div>
  )
}
export default TaskSection