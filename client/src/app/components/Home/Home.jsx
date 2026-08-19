import Image from 'next/image'
import React from 'react'
import { TbPdf, TbTxt } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { FaPlus } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { FiPlus } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';
import { CgLoadbarDoc } from 'react-icons/cg';

function SuggestedFiles() {
  return (
    <section className='grid lg:grid-cols-6 md:grid-cols-4 gap-2'>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden '>
        <Image className='w-[180px] h-[120px] rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>

      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image className='w-[180px] h-[120px] rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='  h-[16px]'><CgLoadbarDoc className='text-blue-500' /></div>
          <h1 className='text-sm'>Writen code.txt</h1>
        </div>
      </div>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image className='w-[180px] h-[120px] rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white ' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image className='w-[180px] h-[120px] rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white ' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image className='w-[180px] h-[120px] rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white ' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>
      <div className='rounded-xl bg-white p-2 overflow-y-hidden'>
        <Image className='w-[180px] h-[120px] rounded-xl' alt='file preview' width={600} height={400} src={'https://placehold.co/600x400/png'}/>

        <div className='mt-2 flex gap-2 items-center '>
          <div className='bg-red-500 inline rounded h-[16px]'><TbPdf className='text-white ' /></div>
          <h1 className='text-sm'>Class notes.pdf</h1>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {

  return (
    <div className='w-full bg-[#ffffff4a] backdrop-blur-xs rounded-3xl h-full p-5 border-l border-t border-[#fff]'>
      <section className='flex justify-between items-center'>
        <input type="text" className='shadow-2xl shadow-[#e7e7e7] py-3 px-5 rounded-full border-l border-t border-white bg-[#ffffff4a] backdrop-blur-xs outline-none w-[40%]' placeholder='search...' />
        <div className='flex gap-4 items-center'>
          <button className='flex items-center gap-2 border-l border-t border-[#fff] rounded-full py-2 px-5 cursor-pointer bg-[#ffffff5d] font-bold'>
            <TiPlus />
            Join Room
          </button>
          <button className='border-2 rounded-full border-gray-400 cursor-pointer'><Image className='w-10 h-10 rounded-full' unoptimized src={'https://placehold.co/400'} width={400} height={400} alt="Placeholder Image" /></button>
        </div>
      </section>


      <section className='mt-2 border-l border-t border-white bg-[#ffffff5d] p-5 rounded-3xl h-[80%]'>
        <span className='text-black font-bold flex items-center gap-2 rounded-full cursor-pointer hover:bg-white w-[155px] py-1 px-3'><FaAngleDown /> Suggested Files</span>
        <div className='mt-5'>
          <SuggestedFiles />
        </div>
      </section>
    </div>
  )
}
