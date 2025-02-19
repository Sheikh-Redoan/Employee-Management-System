import React from 'react'

const Header = () => {
  return (
    <div>
         <div className='flex items-end justify-between text-[#fff]'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
        <button className='bg-[#31511E] text-[#F6FCDF]  text-base font-medium px-5 py-2 rounded-sm'>Log Out</button>
    </div>
    </div>
  )
}

export default Header