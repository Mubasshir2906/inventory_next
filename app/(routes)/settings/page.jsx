"use client"
import React from 'react'
import Projects from '@/app/sampleData/projects.json'
import { useRouter, usePathname } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const pathname= usePathname()
  return (
    <div className='p-8'>
        <h4 className='text-slate-100 text-2xl font-bold mb-3'>Projects</h4>
        <div className='flex flex-wrap gap-4'>
          {Projects.map(project => (<div className='bg-indigo-500 w-[280px] h-[140px] overflow-hidden p-6 rounded-lg flex flex-col gap-2'>
              <h3 className='text-white text-2xl font-bold'>{project.projectName}</h3>
              <p className='text-white text-sm'>{project.description}</p>
          </div>))}
          <div className='border-4 border-indigo-500 w-[280px] h-[140px] p-6 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer' onClick={()=>{router.push(`${pathname}/add-project`)}}>
              <h3 className='text-indigo-500 text-4xl font-bold'>+</h3>
          </div>
        </div>
        
    </div>
  )
}

export default page