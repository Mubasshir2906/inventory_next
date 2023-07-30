import Image from 'next/image'
import React from 'react'

const TopAssets = () => {
  return (
    <div className='w-full flex justify-between gap-6'>
        <div className='bg-slate-700/30 w-full p-6 flex flex-col rounded-lg'>
            <h1 className='text-slate-400'>Switches</h1>
            <Image className='self-center' src='/images/doughnut.png' width={200} height={180} />
        </div>
        <div className='bg-slate-700/30 w-full p-6 flex flex-col rounded-lg'>
            <h1 className='text-slate-400'>Desktops</h1>
            <Image className='self-center' src='/images/doughnut.png' width={200} height={180} />
        </div>
        <div className='bg-slate-700/30 w-full p-6 flex flex-col rounded-lg'>
            <h1 className='text-slate-400'>Access Points</h1>
            <Image className='self-center' src='/images/doughnut.png' width={200} height={180} />
        </div>
        <div className='bg-slate-700/30 w-full p-6 flex flex-col rounded-lg'>
            <h1 className='text-slate-400'>Laptops</h1>
            <Image className='self-center' src='/images/doughnut.png' width={200} height={180} />
        </div>
    </div>
  )
}

export default TopAssets