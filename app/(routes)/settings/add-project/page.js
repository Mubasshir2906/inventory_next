"use client"
import React from 'react'

const AddProject = () => {
    const onChange = (e) => {

    }
    const onSubmit = (e) => {

    }
  return (
    <div className='p-8'>
        <h4 className='text-slate-100 text-2xl font-bold mb-3'>Add Project</h4>
        <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
          <form onSubmit={(e)=>onSubmit(e)} className='flex gap-6 flex-wrap justify-between'>
            <label className='flex flex-col w-full gap-1'>
              <span className='text-slate-300 text-lg font-bold'>Name</span>
               <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
            </label>
            <label className='flex flex-col w-full gap-1'>
              <span className='text-slate-300 text-lg font-bold'>Description</span>
               <textarea rows='3' name='assetImage' onChange={(e) => onChange(e)}  placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 resize-none'></textarea>
            </label>
            <label className='flex flex-col w-full gap-1'>
              <span className='text-slate-300 text-lg font-bold'>Comments</span>
               <input type='text' name='comments' onChange={(e) => onChange(e)}  placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
            </label>
            <div className='w-full flex gap-4 justify-end mt-6'>
              <button className='bg-red-400/80 py-2 px-4 rounded-lg text-slate-100'>Cancel</button>
              <button type='submit' className='bg-emerald-400/80 py-2 px-4 rounded-lg text-slate-100'>Save</button>
            </div>
          </form>
          </div>
        
    </div>
  )
}

export default AddProject