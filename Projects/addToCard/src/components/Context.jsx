import { createContext, useState } from "react";
 
export const CardContext= createContext()


export const CardProvider=({children})=>{
    const[card,setCard]=useState([])
  
   
const addToCard=(product)=>{
    if (card.includes(product)) {
           alert("this product already add in card") 
    }
    else{
            setCard(prev=>[...prev,product])


    }
}

  const removeFromCard = (productId) => {
    setCard((prev) => prev.filter((product) => product.id !== productId));
  };

     return(<CardContext.Provider value={{card,addToCard,removeFromCard}}>
        {children}
     </CardContext.Provider>
     )
    
}

