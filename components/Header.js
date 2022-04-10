import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTheme } from 'next-themes'
import Side_Bar from './Side_Bar';
import Search from './Search';


const Header = () => {
  const {theme, setTheme} = useTheme()
  const [IsOpen, SetIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    // bg-gray-900 text-black dark:text-white dark:bg-white
    <div className='sticky shadow-sm  bg-white dark:bg-black dark:bg-opacity-10 top-0 w-full h-16 items-center bg-opacity-30 
    before:absolute before:inset-0
    before:z-[-10]
    before:block
    before:w-full before:h-full
    before:backdrop-blur-md'>
      <div className='flex h-full items-center'>
          <i className="bi-list ml-5 text-2xl mr-2 opacity-70" role="button" onClick={() => SetIsOpen(!IsOpen)} aria-label="GitHub"></i>
        <div className='mx-2 md:mx-10 text-2xl'>
          <i className="bi-youtube  mr-2 text-mainRed" role="img" aria-label="Youtube"></i>
          Youtube
        </div>
        <div className='absolute  right-0 mr-5'>
          <i className="float-left visible md:invisible bi-search text-xl mr-5 cursor-pointer" role="button" onClick={() => setIsVisible(!isVisible)} aria-label="search"></i>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='mr-5'>
           {theme === 'dark' ? (<i className="bi-sun-fill text-xl cursor-pointer" role="img" aria-label="sun" />) : <i className="bi-moon-fill text-xl cursor-pointer" role="img" aria-label="moon" />}
          </button>
          <div className='inline-block mt-1'>Title</div>
          <div className='w-8 h-8 float-right ml-5  rounded-full bg-slate-700 '></div>
        </div>
      </div>
      {isVisible ? (<Search visible='visible'/>) : (<Search visible='invisible'/>)}
      
      {IsOpen ? (<Side_Bar md='visable' show=''/>) : (<Side_Bar md="invisible" show='hidden'/>)}
    </div>
  )
}

export default Header