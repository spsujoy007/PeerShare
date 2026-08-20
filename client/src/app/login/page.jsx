'use client'
import React, { useState } from 'react'

export default function page() {
    const [code, setCode] = useState(['', '', '', '']);
    const [tab, setTab] = useState('room');
    console.log(tab)

    const handleChange = (index) => (e) => {
        const newCode = [...code];
        newCode[index] = e.target.value;
        setCode(newCode);
    };

    const isFilled = code.every(digit => digit.length > 0);

    const moveNextDigit = (nextInputId) => (e) => {
        if(e.key === 'Backspace' && e.target.value.length === 0) {
            const prevWrapper = e.target.parentElement.previousElementSibling;
            if (prevWrapper) {
                const prevInput = prevWrapper.querySelector('input');
                if (prevInput) {
                    prevInput.focus();
                }
            }
        } else if (e.target.value.length >= 1 && nextInputId) {
            const nextInput = document.getElementById(nextInputId);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    return (
    <div className='mx-auto my-auto select-none md:w-[500px]'>
        <style>{`
            @keyframes sweep {
                0% { left: -100%; }
                50% { left: 200%; }
                100% { left: 200%; }
            }
            .shine-overlay {
                position: absolute;
                top: 0;
                left: -100%;
                width: 60%;
                height: 100%;
                background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
                transform: skewX(-20deg);
                animation: sweep 2s infinite ease-in-out;
                pointer-events: none;
            }
        `}</style>

        <h1 className='text-2xl font-bold text-gray-800 text-center pb-6'>Welcome to, <span className='text-orange-500'>PeerShare</span></h1>
        <div className='flex gap-1 bg-[#ffffff48] p-2 rounded-2xl border-l border-t border-[#fff]'>
            
            <button onClick={ () => setTab('room')} className={`w-1/2 py-3  border-t border-l border-white rounded-l-xl ${tab === 'room' ? 'bg-[#ffffff] shadow-xl shadow-[#ebeaea] backdrop-blur-2xl text-orange-500 font-bold' : 'bg-[#ffffff9b]'} cursor-pointer `}>Create Room</button>
            <button onClick={ () => setTab('login')} className={`w-1/2 py-2  border-t border-r border-white rounded-r-xl ${tab === 'login' ? 'bg-[#ffffff] shadow-xl shadow-[#ebeaea] backdrop-blur-2xl text-orange-500 font-bold' : 'bg-[#ffffff9b] '} cursor-pointer `}>Login</button>
        </div>

        {/* join room  */}
        {
            tab === 'room' && (
                <section className=' bg-[#ffffff48] backdrop-blur-xs rounded-3xl min-h-[250px] px-3 py-5 border-l border-t border-[#fff] mt-2 '>

                <p className='pl-7 text-orange-500'>Enter Room Code:</p>
                <div className='mt-2 grid grid-cols-4 gap-2 mx-auto w-fit mb-2'>
                    <div className="relative overflow-hidden rounded-xl w-[100px] h-[100px]">
                        <input 
                            onChange={handleChange(0)} onKeyUp={moveNextDigit('input2')} autoFocus id="input1" type="text" maxLength={'1'} className={`w-full h-full text-5xl text-center bg-[#ffffffae] focus:outline-none rounded-xl transition-all duration-300 ${isFilled ? 'text-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.4)]' : ''}`} />
                        {isFilled && <div className="shine-overlay"></div>}
                    </div>
                    <div className="relative overflow-hidden rounded-xl w-[100px] h-[100px]">
                        <input 
                            onChange={handleChange(1)} onKeyUp={moveNextDigit('input3')} id="input2" type="text" maxLength={'1'} className={`w-full h-full text-5xl text-center bg-[#ffffffae] focus:outline-none rounded-xl transition-all duration-300 ${isFilled ? 'text-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.4)]' : ''}`} />
                        {isFilled && <div className="shine-overlay" style={{ animationDelay: '0.1s' }}></div>}
                    </div>
                    <div className="relative overflow-hidden rounded-xl w-[100px] h-[100px]">
                        <input
                            onChange={handleChange(2)} onKeyUp={moveNextDigit('input4')} id="input3" type="text" maxLength={'1'} className={`w-full h-full text-5xl text-center bg-[#ffffffae] focus:outline-none rounded-xl transition-all duration-300 ${isFilled ? 'text-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.4)]' : ''}`} />
                        {isFilled && <div className="shine-overlay" style={{ animationDelay: '0.2s' }}></div>}
                    </div>
                    <div className="relative overflow-hidden rounded-xl w-[100px] h-[100px]">
                        <input 
                            onChange={handleChange(3)} onKeyUp={moveNextDigit(null)} id="input4" type="text" maxLength={'1'} className={`w-full h-full text-5xl text-center bg-[#ffffffae] focus:outline-none rounded-xl transition-all duration-300 ${isFilled ? 'text-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.4)]' : ''}`} />
                        {isFilled && <div className="shine-overlay" style={{ animationDelay: '0.3s' }}></div>}
                    </div>
                </div>
                <span className='text-green-500 ml-8'>Room code is available</span>
                <div>
                    {/* <span className='text-red-500 ml-8'>Room code already exists... </span> */}
                    {/* <span className='underline ml-2 cursor-pointer'>generate unique</span> */}
                </div>

                <div className='px-6 flex gap-1 mt-5 w-full'>
                    <button className='bg-[#ffffffae] text-black py-3 px-4 rounded-l-xl hover:bg-orange-600 hover:text-white duration-150 cursor-pointer focus:outline-none w-1/2'>Create Room</button>
                    <button className='bg-orange-500 text-white py-3 px-4 rounded-r-xl hover:bg-orange-600 focus:outline-none w-1/2 hover:text-white duration-150 cursor-pointer'>Join Room</button>
                </div>
                </section>
            )
        }

        {
            tab === 'login' && (
                <section className=' bg-[#ffffff48] backdrop-blur-xs rounded-3xl min-h-[200px] px-3 py-8 border-l border-t border-[#fff] mt-2'>
                    <label htmlFor="email" className='ml-2'>Email</label> <br />
                    <input autoFocus type="text" id="email" name="email"
                        className={`w-full py-3 px-4 rounded-xl border-l border-t border-[#fff] bg-[#ffffff4a] backdrop-blur-xs outline-none focus:bg-[#ffffff] focus:shadow-lg focus:shadow-[#ebeaea] duration-150`} 
                        placeholder="email" /> <br />

                    <div className='mt-5 grid grid-cols-4 gap-2 mx-auto w-fit mb-2 hidden'>
                    <div className=" relative overflow-hidden rounded-xl w-[100px] h-[100px]">
                        <input 
                            onChange={handleChange(0)} onKeyUp={moveNextDigit('input2')} id="input1" type="text" maxLength={'1'} className={`w-full h-full text-5xl text-center bg-[#ffffffae] focus:outline-none rounded-xl transition-all duration-300 ${isFilled ? 'text-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.4)]' : ''}`} />
                        {isFilled && <div className="shine-overlay"></div>}
                    </div>
                    <div className="relative overflow-hidden rounded-xl w-[100px] h-[100px]">
                        <input 
                            onChange={handleChange(1)} onKeyUp={moveNextDigit('input3')} id="input2" type="text" maxLength={'1'} className={`w-full h-full text-5xl text-center bg-[#ffffffae] focus:outline-none rounded-xl transition-all duration-300 ${isFilled ? 'text-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.4)]' : ''}`} />
                        {isFilled && <div className="shine-overlay" style={{ animationDelay: '0.1s' }}></div>}
                    </div>
                    <div className="relative overflow-hidden rounded-xl w-[100px] h-[100px]">
                        <input
                            onChange={handleChange(2)} onKeyUp={moveNextDigit('input4')} id="input3" type="text" maxLength={'1'} className={`w-full h-full text-5xl text-center bg-[#ffffffae] focus:outline-none rounded-xl transition-all duration-300 ${isFilled ? 'text-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.4)]' : ''}`} />
                        {isFilled && <div className="shine-overlay" style={{ animationDelay: '0.2s' }}></div>}
                    </div>
                    <div className="relative overflow-hidden rounded-xl w-[100px] h-[100px]">
                        <input 
                            onChange={handleChange(3)} onKeyUp={moveNextDigit(null)} id="input4" type="text" maxLength={'1'} className={`w-full h-full text-5xl text-center bg-[#ffffffae] focus:outline-none rounded-xl transition-all duration-300 ${isFilled ? 'text-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.4)]' : ''}`} />
                        {isFilled && <div className="shine-overlay" style={{ animationDelay: '0.3s' }}></div>}
                    </div>
                </div>
                    
                    <button className='bg-orange-500 hover:bg-orange-600 w-full text-white py-3 px-4 rounded-xl  focus:outline-none duration-150 cursor-pointer mt-4'>Send Verification Code</button>
                    {/* <button className='bg-orange-500 hover:bg-orange-600 w-full text-black py-3 px-4 rounded-xl  focus:outline-none duration-150 cursor-pointer mt-4'>Login</button> */}
                    <p className='ml-2 mt-2'>New in PeerShare? <a href="/signup" className='text-orange-500 underline'>Sign up</a></p>
                </section>
            )
        }
    </div>
  )
}
