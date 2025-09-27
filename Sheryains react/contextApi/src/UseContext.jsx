import { createContext } from "react"

export const UserContext=createContext()

export const UserContextProvider=({children})=>{


    const myName="nishhu"
return(
  <UserContext.Provider value={{click,setClick}}>
    {children}
  </UserContext.Provider>
)
}