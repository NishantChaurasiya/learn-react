import React from 'react'

const Condition = ({elem}) => {
    
    const{key,value}=elem
    
    
  return (
        <div className='bg-[#a4cade]/70  px-5 rounded-md py-2'>
         <h2 className='text-[#25AFF4] '>{key}</h2>
         <span>{key==="Wind"?`${value}mph`:key==="Humidity"?`${value}%`:`${value}°c`}</span>
        </div>
  )
}

export default Condition