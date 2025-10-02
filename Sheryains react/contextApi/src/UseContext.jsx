import { createContext } from "react"

export const UserContext=createContext()
 
export const UserContextProvider=({children})=>{
   const myName="nishhu"
     const yourName="nishant"
return(
  <UserContext.Provider value={{myName,yourName}}>
    {children}
  </UserContext.Provider>
)
}