import React, { useState } from 'react'
import User from '../components/User'
import { users } from '../constants'
import Button from '../components/Button'

const Main = () => {

  const [list, setList] = useState(users)
  

  const g = () => {
    setList([])
   
  }
  return (
    <div className='flex justify-between'>
    <div className='bg-white w-[30rem] ml-[500px] mt-8 rounded drop-shadow-2xl p-5'>
      <p className='mb-5 text-[1.75rem]'>{list.length} Birthdays Today</p>
      {list.map((user)=><User name={user.name} age={user.age} image={user.image}/>)}
      <Button onClick={g}/>
     
    </div>
    
    </div>
  )
}

export default Main;