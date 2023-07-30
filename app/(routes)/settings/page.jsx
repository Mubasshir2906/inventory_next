"use client"
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import {getAllProjects} from '@/app/_clientHelpers/projectHelper.js'
import {getAllCategories} from '@/app/_clientHelpers/categoryHelper'
import { getAllVendors } from '@/app/_clientHelpers/vendorHelper'
import ProjectCard from '@/app/_components/ProjectCard'
import SettingsAssetCard from '@/app/_components/SettingsAssetCard'

const Settings = () => {
  const [projects,setProjects] = useState()
  const [categories, setCategories] = useState()
  const [vendors,setVendors] = useState()
  const router = useRouter()
  const pathname= usePathname()

  const getAllDetails = async ()=>{
    const allProjects = await getAllProjects()
    const allCategories = await getAllCategories()
    const allVendors = await getAllVendors()
    //console.log(data)
    setProjects(allProjects)
    setCategories(allCategories)
    setVendors(allVendors)
  }

  useEffect(()=>{
    getAllDetails()
  },[])
  return (
    <div className='p-8 flex flex-col gap-12'>
      <div>
        <h4 className='text-slate-100 text-2xl font-bold mb-3'>Projects</h4>
        <div className='flex flex-wrap gap-4'>
          {projects && projects.map((project,index) => <ProjectCard project={project} />)}
          <button onClick={()=>{router.push(`${pathname}/add-project`)}} className='px-6 text-indigo-500 text-2xl font-bold border-4 rounded-lg border-indigo-500'><p>+</p></button>
        </div>
      </div>
      <div>
        <h4 className='text-slate-100 text-2xl font-bold mb-3'>Categories</h4>
        <div className='flex flex-wrap gap-4'>
          {categories && categories.map((category,index) => <SettingsAssetCard category={category} />)}
          <button onClick={()=>{router.push(`${pathname}/add-category`)}} className='px-6 text-indigo-500 text-2xl font-bold border-4 rounded-lg border-indigo-500'><p>+</p></button>
        </div>
      </div>
      <div>
        <h4 className='text-slate-100 text-2xl font-bold mb-3'>Vendor</h4>
        <div className='flex flex-wrap gap-4'>
          {vendors && vendors.map((category,index) => <SettingsAssetCard category={category} />)}
          <button onClick={()=>{router.push(`${pathname}/add-vendor`)}} className='px-6 text-indigo-500 text-2xl font-bold border-4 rounded-lg border-indigo-500'><p>+</p></button>
        </div>
      </div>
      <div>
        <h4 className='text-slate-100 text-2xl font-bold mb-3'>Models</h4>
        <div className='flex flex-wrap gap-4'>
          {categories && categories.map((category,index) => <SettingsAssetCard category={category} />)}
          <button onClick={()=>{router.push(`${pathname}/add-asset`)}} className='px-6 text-indigo-500 text-2xl font-bold border-4 rounded-lg border-indigo-500'><p>+</p></button>
        </div>
      </div>
        
        
    </div>
  )
}

export default Settings