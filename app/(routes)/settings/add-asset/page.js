"use client"
import React, { useEffect, useState } from 'react'
import {addAsset} from '@/app/_clientHelpers/assetHelper.js'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import {getAllCategories} from '@/app/_clientHelpers/categoryHelper.js'
import {getAllVendors} from '@/app/_clientHelpers/vendorHelper.js'

const AddAsset = () => {
    const router = useRouter()
    const [categories, setCategories] = useState()
    const [vendors,setVendors] = useState()
    const [asset,setAsset] = useState()

    const getAllData = async ()=>{
      const allCategories = await getAllCategories()
      const allVendors = await getAllVendors()
      setCategories(allCategories)
      setVendors(allVendors)
    }
    useEffect(()=>{
      getAllData()
    },[])
    const onChange = (e) => {
      setAsset((prev)=>({...prev, [e.target.name]:e.target.value}))
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await addAsset(asset)
        console.log(response)
        if(response.status){
            router.push("/settings")
        }
        else {

        }
    }
    const onReset = (e) => {
        router.push("/settings")
    }
  return (
    <div className='p-8'>
        <h4 className='text-slate-100 text-2xl font-bold mb-3'>Add Asset</h4>
        <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
          <form onSubmit={(e)=>onSubmit(e)} onReset={(e)=>onReset(e)} className='flex gap-6 flex-wrap justify-between'>
          <label className='flex flex-col w-[48%] gap-1'>
              <span className='text-slate-300 text-lg font-bold'>Category</span>
               <select type='text' name='category' defaultValue="DEFAULT" onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '>
                <option className='text-slate-300' disabled value="DEFAULT">Select Category</option>
                {categories && categories.map(category => (<option className='text-slate-300 p-2 hover:bg-yellow-400' value={category.title}>{category.title}</option>))}
               </select>
            </label>
            <label className='flex flex-col w-[48%] gap-1'>
              <span className='text-slate-300 text-lg font-bold'>Vendor</span>
               <select type='text' name='vendor' defaultValue="DEFAULT" onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '>
               <option className='text-slate-300' disabled value="DEFAULT">Select Vendor</option>
                {vendors && vendors.map(vendor => (<option className='text-slate-300 p-2 hover:bg-yellow-400' value={vendor.title} >{vendor.title}</option>))}
               </select>
            </label>
            <label className='flex flex-col w-full gap-1'>
              <span className='text-slate-300 text-lg font-bold'>Title</span>
               <input type='text' name='title' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
            </label>
            
            <label className='flex flex-col w-full gap-1'>
              <span className='text-slate-300 text-lg font-bold'>Description</span>
               <textarea rows='3' name='description' onChange={(e) => onChange(e)}  placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 resize-none'></textarea>
            </label>
            
            <div className='w-full flex gap-4 justify-end mt-6'>
              <button type='reset' className='bg-red-400/80 py-2 px-4 rounded-lg text-slate-100' >Cancel</button>
              <button type='submit' className='bg-emerald-400/80 py-2 px-4 rounded-lg text-slate-100'>Save</button>
            </div>
          </form>
          </div>
        
    </div>
  )
}

export default AddAsset