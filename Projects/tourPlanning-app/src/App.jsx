import BoxContainer from "./components/BoxContainer"


const App = () => {
  return (
    <div className=" w-full min-h-[100vh] items-center p-5 flex flex-col gap-10 ">
      <h1 className="text-3xl font-extrabold">Planning for Travelling</h1>
      <BoxContainer />
    </div>
  )
}

export default App