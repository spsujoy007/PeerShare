'use client'
import React from 'react'

export default function page() {

    const moveNextDigit = (nextInputId) => (e) => {
        if(e.key === 'Backspace' && e.target.value.length === 0) {
            const prevInput = e.target.previousElementSibling;
            if (prevInput) {
                prevInput.focus();
            }
        } else if (e.target.value.length >= 1 && nextInputId) {
            const nextInput = document.getElementById(nextInputId);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

  return (
    <div className='mx-auto my-auto'>
        <section className='md:w-[500px] bg-[#ffffff48] backdrop-blur-xs rounded-3xl min-h-[300px] px-3 py-10 border-l border-t border-[#fff] '>
            <h1 className='text-2xl font-bold text-gray-800 text-center pb-6'>Welcome to, <span className='text-orange-500'>PeerShare</span></h1>
            <div className='flex gap-1 bg-[#ffffff9b] p-2 rounded-2xl'>
                <button className='w-1/2 py-3 bg-[#ffffff42] border-t border-l border-white rounded-xl shadow-xl shadow-[#ebeaea] backdrop-blur-2xl cursor-pointer'>Create Room</button>
                <button className='w-1/2 py-2 bg-[#ffffff9b] border-t border-r border-white rounded-xl   cursor-pointer'>Login</button>
            </div>

            <div className='mt-5 flex gap-2 mx-auto w-fit mb-2'>
                <input 
                    onKeyUp={moveNextDigit('input2')} autoFocus id="input1" type="text" maxLength={'1'} className='text-5xl px-9 bg-[#ffffffae] border border-[#fff] focus:outline-none rounded-xl w-[100px] h-[100px]' />
                <input 
                    onKeyUp={moveNextDigit('input3')} id="input2" type="text" maxLength={'1'} className='text-5xl px-9 bg-[#ffffffae] border border-[#fff] focus:outline-none rounded-xl w-[100px] h-[100px]' />
                <input
                    onKeyUp={moveNextDigit('input4')} id="input3" type="text" maxLength={'1'} className='text-5xl px-9 bg-[#ffffffae] border border-[#fff] focus:outline-none rounded-xl w-[100px] h-[100px]' />
                <input 
                    onKeyUp={moveNextDigit(null)} id="input4" type="text" maxLength={'1'} className='text-5xl px-9 bg-[#ffffffae] border border-[#fff] focus:outline-none rounded-xl w-[100px] h-[100px]' />
            </div>
            {/* <span className='text-green-500 ml-8'>Room code is available</span> */}
            <div>
                {/* <span className='text-red-500 ml-8'>Room code already exists... </span> */}
                {/* <span className='underline ml-2 cursor-pointer'>generate unique</span> */}
            </div>

            <div className='px-6 flex gap-1 mt-3 w-full'>
                <button className='bg-[#ffffffae] text-black py-3 px-4 rounded-l-xl hover:bg-orange-600 hover:text-white duration-150 cursor-pointer focus:outline-none w-1/2'>Create Room</button>
                <button className='bg-orange-500 text-white py-3 px-4 rounded-r-xl hover:bg-orange-600 focus:outline-none w-1/2 hover:text-white duration-150 cursor-pointer'>Join Room</button>
            </div>
        </section>
    </div>
  )
}
