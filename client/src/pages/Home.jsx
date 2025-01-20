import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div className='shadow py-4'>
    <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
      <Navbar/>
      <div className='flex gap-4 max-sm:text-xs'>
        <button className='text-gray-600'>Recruiter Login</button>
        <button className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
      </div>
    </div>
    </div>
  )
}

export default Home