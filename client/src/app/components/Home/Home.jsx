'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import { TbPdf, TbTxt } from "react-icons/tb";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { FaPlus } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { FiPlus } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';
import { CgCode, CgLoadbarDoc } from 'react-icons/cg';
import Link from 'next/link';

function SuggestedFiles() {
  return (
    <section className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4'>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden '>
        <Image className='w-full h-24 sm:h-28 md:h-32 object-cover rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>

      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image loading="eager" className='w-full h-24 sm:h-28 md:h-32 object-cover rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='  h-[16px]'><CgLoadbarDoc className='text-blue-500' /></div>
          <h1 className='text-sm'>Writen code.txt</h1>
        </div>
      </div>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image loading="eager" className='w-full h-24 sm:h-28 md:h-32 object-cover rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white ' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image loading="eager" className='w-full h-24 sm:h-28 md:h-32 object-cover rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white ' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image loading="eager" className='w-full h-24 sm:h-28 md:h-32 object-cover rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white ' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image loading="eager" className='w-full h-24 sm:h-28 md:h-32 object-cover rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white ' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>
    </section>
  )
}

const HomeNavgiation = () => {
  const [handleInputFocus, setHandleInputFocus] = useState(false);

  return (
    <section className='flex justify-between items-center'>

        <div className='relative w-[80%] md:w-[40%]'>
          <input onFocus={(e) => {
            setHandleInputFocus(true);
          }} 
          onBlur={() => {
            setTimeout(() => {
              setHandleInputFocus(false);
            }, 100);
          }}
          type="text" 
          className={`relative shadow-2xl shadow-[#e7e7e7] py-3 px-5 rounded-full border-l border-t border-white bg-[#ffffff4a] backdrop-blur-xs outline-none w-full z-20 ${handleInputFocus ? 'rounded-b-none rounded-t-[25px] bg-white shadow-none' : ''}`} placeholder='search...' />

          <div className={`absolute top-full min-h-[200px] border-t border-gray-200 rounded-t-none  rounded-b-[25px] bg-white w-full z-10 ${handleInputFocus ? 'block' : 'hidden'}`}>
            <ul className='p-3'>
              <Link href='/login'><li className='py-2 px-3 hover:bg-gray-100 rounded-lg cursor-pointer'> Suggested file 1 </li></Link>
              <Link href='/'><li className='py-2 px-3 hover:bg-gray-100 rounded-lg cursor-pointer'> Suggested file 2 </li></Link>
            </ul>
          </div>
        </div>

        <div className='flex gap-4 items-center'>
          <button className='md:flex items-center gap-2 border-l border-t border-[#fff] rounded-full py-2 px-5 cursor-pointer bg-[#ffffff5d] font-bold hover:bg-white duration-150 hidden'>
            <TiPlus />
            Join Room
          </button>
          <button className='border-2 rounded-full border-gray-400 cursor-pointer'><Image loading="eager" className='w-10 h-10 rounded-full' unoptimized src={'https://placehold.co/400'} width={400} height={400} alt="Placeholder Image" /></button>
        </div>
      </section>
  )
}

export default function HomePage() {

  const [hideSuggestedFiles, setHideSuggestedFiles] = useState(false);

  return (
    <div className='md:w-full bg-[#ffffff4a] backdrop-blur-xs rounded-3xl  p-5 border-l border-t border-[#fff]'>
      
      <HomeNavgiation />

      <section className='mt-2 border-l border-t border-white bg-[#ffffff5d] p-5 rounded-3xl md:h-[80%]'>
        
        <section className='mt-2 flex gap-2'>
          
          <Link href="/file/text" className='rounded-xl bg-[#ffffff99] group p-2 overflow-y-hidden w-29 border-l border-t border-[#fff] backdrop-blur-2xl cursor-pointer'>
            <div className='flex justify-center group-hover:bg-[#ffffff8b] items-center  rounded-xl h-10 w-full  bg-[#ededed]   duration-150'>
              <TiPlus />
            </div>
            <div className='mt-2 flex gap-2 items-center '>
              <div className='h-[16px]'><CgLoadbarDoc className='text-blue-500' /></div>
              <h1 className='text-sm'>Blank file</h1>
            </div>
          </Link>

          <div className='rounded-xl bg-[#ffffff99] group p-2 overflow-y-hidden w-29 border-l border-t border-[#fff] backdrop-blur-2xl cursor-pointer'>
            <div className='flex justify-center group-hover:bg-[#ffffff8b] items-center  rounded-xl h-10 w-full  bg-[#ededed]   duration-150'>
              <TiPlus />
            </div>
            <div className='mt-2 flex gap-2 items-center '>
              <div className='h-[16px]'><CgCode className='text-green-500' /></div>
              <h1 className='text-sm'>Blank code</h1>
            </div>
          </div>

        </section>

        <span 
          onClick={() => setHideSuggestedFiles(!hideSuggestedFiles)} 
          className='mt-5 text-black font-bold flex items-center gap-2 rounded-full cursor-pointer hover:bg-white w-[155px] py-1 px-3 duration-150 select-none'>
            {hideSuggestedFiles ? <FaAngleRight /> : <FaAngleDown />} Suggested Files
        </span>

        {
          !hideSuggestedFiles && (
            <div className='mt-3'>
              <SuggestedFiles />
            </div>
          )
        }
      </section>
    </div>
  )
}
