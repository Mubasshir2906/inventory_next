'use client'
import React from 'react'
import { BsSearch,BsPersonFill,BsGearFill } from "react-icons/bs";
import { AiOutlineMenu,AiFillBell } from "react-icons/ai";
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter()
  return (
    <div className='w-full bg-slate-700/70 text-slate-100 h-[60px] max-h-[4rem]'>
        <div className='w-full max-w-[1560px] mx-auto flex justify-between items-center h-full px-3'>
          <div className='flex gap-6 items-center'>
          <span className='text-slate-100 text-2xl font-bold'><AiOutlineMenu/></span>
          <button className='bg-indigo-500 hover:bg-gradient-to-l hover:from-purple-900 hover:to-purple-800 hover:drop-shadow-lg text-slate-100 px-3 py-1 rounded-full' onClick={()=>{router.push('/add-new')}}>Add New</button>
          </div>
            <div className='flex items-center gap-3'>
                <div className='bg-slate-900 rounded-full w-[320px] px-6 py-2 text-white flex gap-3 items-center'>
                    <input placeholder='Search' className='w-full bg-transparent  focus:outline-none'></input>
                    <span><BsSearch/></span>
                </div>
                <span className='text-xl text-slate-100 p-1 rounded-full border-2 border-slate-100'><AiFillBell/></span>
                <span className='text-xl text-slate-100 p-1 rounded-full border-2 border-slate-100'><BsPersonFill/></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar