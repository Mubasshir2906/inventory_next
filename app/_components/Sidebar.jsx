import React from 'react'
import ProjectsList from './ProjectsList';


const Sidebar = () => {
  return (
    <div className=' w-full bg-slate-800 border-r-cyan-600/30 h-screen overflow-y-hidden p-3 flex flex-col gap-6 items-center'>
        <span className='h-[60px] max-h-[4rem]'>
          <h1 className='text-2xl font-bold text-slate-100'>StockSheet</h1>
        </span>
        <div className='w-full'>
          <ProjectsList/>
        </div>
        
    </div>
  )
}

export default Sidebar