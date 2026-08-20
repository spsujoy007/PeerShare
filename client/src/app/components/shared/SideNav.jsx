import Link from 'next/link'
import React from 'react'
import { TiPlus } from 'react-icons/ti'

export default function SideNav() {
  return (
    <div className='w-75  bg-[#ffffff4a] backdrop-blur-xs rounded-3xl h-full p-5 border-l border-t border-[#fff] md:block hidden'>
        <div className='mb-8 mt-5'>
            <h1 className='text-3xl font-bold text-orange-500'>PeerShare</h1>
        </div>
        <ul className='text-xl'>
            {/* <li className='mb-2 bg-[#ffffff8b] cursor-pointer p-3 rounded-lg border-l border-t border-[#fff] flex  items-center gap-4 w-[130px]'><TiPlus /> New</li> */}
            <li className='mb-2 bg-[#ffffff8b] cursor-pointer p-3 rounded-lg border-l border-t border-[#fff]'>Home</li>
            <li className='mb-2 hover:bg-[#ffffff8b] cursor-pointer p-3 rounded-lg '>Shared with me</li>
            <li className='mb-2 hover:bg-[#ffffff8b] cursor-pointer p-3 rounded-lg '>Join room</li>
        </ul>
    </div>
  )
}
