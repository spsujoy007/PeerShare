'use client'
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'


export default function CodePage() {

      const [fontSize, setFontSize] = useState(20)
      const [language, setLanguage] = useState('javascript')
      const [theme, setTheme] = useState('vs-light')
      const [code, setCode] = useState('')
    

  return (
    <div className='flex flex-col bg-[#ffffff4a] backdrop-blur-xs rounded-3xl h-full pt-5 border-l border-t border-[#fff]'>
      <section className='flex justify-end gap-2 pr-5 pb-5'>
        

        <div className='flex gap-2 items-center'>

        <div className='flex items-center bg-[#ffffff4a] backdrop-blur-xs border border-[#fff] rounded-lg select-none gap-2'>
            <select name="theme" id="theme" value={theme} onChange={(e) => setTheme(e.target.value)} className='bg-[#ffffff4a] backdrop-blur-xs border border-[#fff] rounded-lg select-none gap-2 outline-none px-3 py-2 cursor-pointer'>
              <option className="bg-white text-black" value="vs-light">Light</option>
              <option className="bg-white text-black" value="vs-dark">Dark</option>
            </select>
        </div>

          <div className='flex items-center bg-[#ffffff4a] backdrop-blur-xs border border-[#fff] rounded-lg select-none gap-2 '>
            <select name="language" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} className='bg-[#ffffff4a] backdrop-blur-xs border border-[#fff] rounded-lg select-none gap-2 outline-none px-3 py-2 cursor-pointer'>
              <option className="bg-white text-black" value="javascript">JavaScript</option>
              <option className="bg-white text-black" value="python">Python</option>
              <option className="bg-white text-black" value="java">Java</option>
              <option className="bg-white text-black" value="cpp">C++</option>
              <option className="bg-white text-black" value="csharp">C#</option>
              <option className="bg-white text-black" value="ruby">Ruby</option>
              <option className="bg-white text-black" value="go">Go</option>
              <option className="bg-white text-black" value="rust">Rust</option>
              <option className="bg-white text-black" value="html">HTML</option>
              <option className="bg-white text-black" value="css">CSS</option>
            </select>
          </div>
          
          <div className='flex items-center bg-[#ffffff4a] backdrop-blur-xs border border-[#fff] rounded-lg select-none gap-2'>
            <button className='flex text-xl cursor-pointer items-center px-3 py-1 hover:bg-[#ffffffbb]' onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}>
              a <FaAngleUp className='text-xs' />
            </button>
            <button className='text-xl'>{fontSize}</button>
            <button className='flex text-md cursor-pointer items-center px-3 py-1 hover:bg-[#ffffff8b]' onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}>
              a <FaAngleDown className='text-xs' />
            </button>
          </div>
        </div>
      </section>

      {/* <textarea placeholder='type your code...' autoFocus name="codefile" id="codefile" rows="10" column="80"
        className='flex-1 h-full font-mono bg-[#ffffff] text-xl placeholder:text-gray-500 border border-[#fff] p-3 rounded-2xl w-full outline-none text-black selection:bg-orange-500 selection:text-white resize-none'
        style={{ fontSize: `${fontSize}px` }}>
      </textarea> */}

    <div className='h-full overflow-hidden rounded-b-3xl'>
        <Editor
            options={{
                fontSize: `${fontSize}px`,
                padding: {
                    top: 10,
                },
            }}
            height="100%"
            language={language}
            theme={theme}
            value={code}
            onChange={(value) => setCode(value || "")}
        />
    </div>

      {/* TODO: future update for showing coding output */}
      {/* <div className='mt-5 flex flex-col bg-[#ffffff4a] backdrop-blur-xs rounded-3xl h-[300px] border-l border-t border-[#fff]'>
        <div className='flex justify-end pr-6 py-2 bg-[#ffffff4a] backdrop-blur-xs border-b border-[#fff] rounded-t-2xl'>
            <span className='text-orange-500 text-lg'>Output</span>
        </div>
        <div className='flex-1  bg-[#ffffff] text-xl placeholder:text-gray-500 border border-[#fff] p-3 rounded-b-2xl w-full outline-none text-black selection:bg-orange-500 selection:text-white overflow-auto'>
          <pre style={{ fontSize: `${fontSize}px` }}>
            <p>Text previous should show here</p>
          </pre>
        </div>
      </div> */}
    </div>
  )
}
