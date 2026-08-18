import React from 'react'

export default function SideNav() {
  return (
    <div className='w-75 bg-[#ffffff4a] backdrop-blur-xs rounded-3xl h-[100%] p-5 border-l border-t border-[#fff] md:block hidden'>
        <div className='mb-8 mt-5'>
            <h1 className='text-3xl font-bold text-gray-800'>PeerShare</h1>
        </div>
        <ul className='text-xl'>
            <li className='mb-2 hover:bg-[#ffffff8b] cursor-pointer p-3 rounded-lg border-l border-t border-[#fff]'>Home</li>
            <li className='mb-2 hover:bg-[#ffffff8b] cursor-pointer p-3 rounded-lg border-l border-t border-[#fff]'>Shared with me</li>
            <li className='mb-2 hover:bg-[#ffffff8b] cursor-pointer p-3 rounded-lg border-l border-t border-[#fff]'>Join room</li>
        </ul>
    </div>
  )
}
