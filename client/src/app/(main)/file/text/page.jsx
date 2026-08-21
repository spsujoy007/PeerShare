'use client'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

export default function page() {

  const[fontSize, setFontSize] = useState(20)

  return (
    <div className='bg-[#ffffff4a] backdrop-blur-xs rounded-3xl h-full p-5 border-l border-t border-[#fff]'>
        <section className='flex justify-end pr-5 pb-2'>

          <div className='flex gap-2 items-center'>
            <div>
              <select name="font" id="font" className='bg-[#ffffff4a] backdrop-blur-xs border border-[#fff] rounded-lg  select-none gap-2 outline-none px-3 py-2 cursor-pointer'>
                <option className="bg-white text-black" value="Arial">Arial</option>
                <option className="bg-white text-black" value="Times New Roman">Times New Roman</option>
                <option className="bg-white text-black" value="Courier New">Courier New</option>
              </select>
            </div>

            <div className='flex items-center bg-[#ffffff4a] backdrop-blur-xs border border-[#fff] rounded-lg  select-none gap-2'>
              <button className='flex text-xl cursor-pointer  items-center px-3 py-1 hover:bg-[#ffffffbb]' onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}>
              a <FaAngleUp className='text-xs' />
              </button>

              <button className='text-xl'>{fontSize}</button>

              <button className='flex text-md cursor-pointer  items-center px-3 py-1 hover:bg-[#ffffff8b]' onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}>
                a <FaAngleDown className='text-xs' />
              </button>
            </div>
          </div>

        </section>

        <textarea placeholder='type your text...' autoFocus name="textfile" id="textfile" 
          className='bg-[#ffffff] text-xl text-black placeholder:text-gray-500 border border-[#fff] p-3 rounded-2xl w-full max-h-[94%] min-h-[94%] outline-none text-emerald-500'rows="10" column="50" style={{ fontSize: `${fontSize}px` }}>
        </textarea>


        <div id="modal">
          {/* // preview of text file full view  */}
        </div>
    </div>
  )
}
