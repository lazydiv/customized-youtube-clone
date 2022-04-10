import React from 'react'
import Item from './item'

const Center = () => {
  return (
    <main className='grid w-full max-w-[2160px] h-full mx-auto gap-20 mt-20
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    md:w-5/6 '>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    </main>
  )
}

export default Center