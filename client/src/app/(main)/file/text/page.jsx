'use client'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

export default function page() {

  const[fontSize, setFontSize] = useState(20)

  return (
    <div className='bg-[#ffffff4a] backdrop-blur-xs rounded-3xl h-full p-5 border-l border-t border-[#fff]'>
        <section className='flex justify-end pr-5 pb-2'>
          <div className='flex items-center gap-4 bg-[#ffffff4a] backdrop-blur-xs border border-[#fff] rounded-lg px-3 py-1 select-none'>
            <button className='flex text-xl cursor-pointer  items-center' onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}>
            a <FaAngleUp className='text-xs' />
            </button>
            <button className='text-xl'>{fontSize}</button>
            <button className='flex text-md cursor-pointer  items-center' onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}>
              a <FaAngleDown className='text-xs' />
            </button>
          </div>
        </section>
        <textarea placeholder='type your text...' autoFocus name="textfile" id="textfile" className='bg-[#ffffff] text-xl text-black placeholder:text-gray-500 border border-[#fff] p-3 rounded-2xl w-full max-h-[94%] min-h-[94%] outline-none 'rows="10" column="50" style={{ fontSize: `${fontSize}px` }}></textarea>
    </div>
  )
}
