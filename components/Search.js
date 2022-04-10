import React from 'react'

const Search = (props) => {
  return (
    <div className={`${props.visible}  transition-all ease  md:visible mt-5 md:-mt-14 w-5/6 md:w-2/6 lg:w-3/6 mx-auto  text-center`}>
        <input className='w-full h-12 bg-white dark:bg-zinc-900 dark:bg-opacity-80 bg-opacity-80  rounded-md p-5 outline-none  shadow-sm' type="search" placeholder='type here'/>
    </div>
  )
}

export default Search