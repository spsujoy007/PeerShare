'use client'
import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import { useModalStore } from '@/store/useModalStore' // I will check if @ works, if not I will replace

export default function GlobalModal() {
  const { isOpen, text, fontSize, closeModal } = useModalStore()

  if (!isOpen) return null

  return (
    <div id="global-modal" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 md:p-10">
      <div className="bg-[#ffffff4a] backdrop-blur-md rounded-3xl w-full h-full border-l border-t border-[#fff] flex flex-col p-5 relative shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-white drop-shadow-md">Text Preview</h2>
          <button 
            onClick={closeModal}
            className="bg-[#ffffff4a] hover:bg-[#ffffff8b] border border-[#fff] rounded-full p-2 cursor-pointer transition-colors"
          >
            <FaXmark className="text-xl text-white" />
          </button>
        </div>
        <div className="flex-1 bg-white rounded-2xl p-5 overflow-auto border border-[#fff]">
          <p className="text-black whitespace-pre-wrap selection:bg-yellow-300 selection:text-black" style={{ fontSize: `${fontSize}px` }}>
            {text || "Your text will appear here..."}
          </p>
        </div>
      </div>
    </div>
  )
}
