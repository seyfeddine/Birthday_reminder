import React from 'react'


const User = ({name, age, image}) => {
  return (
    <div className='flex mb-4'>
       <img src={image} className='h-[75px] w-[75px] rounded-full object-cover'/>
        <div className='ml-5 mt-4'>
            <h4 className='mb-[0.35rem] text-[1rem] leading-3 font-bold'>{name}</h4> 
            <p className='text-[#68839C] '>{age} years</p>
       </div>
    </div>
  )
}

export default User