"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import {addSwitch} from'@/app/_clientHelpers/switchesHelper.js'
import {addFirewall} from '@/app/_clientHelpers/firewallHelper.js'
import {getAllCategories} from '@/app/_clientHelpers/categoryHelper.js'
import {getAllVendors} from '@/app/_clientHelpers/vendorHelper.js'
import {getAllAssets} from '@/app/_clientHelpers/assetHelper'
import { getAllProjects } from '@/app/_clientHelpers/projectHelper'
import { model } from 'mongoose'

const AddNewAsset = () => {
  const params = useParams()
  const [newFileds, setNewFields] = useState({})
  const [projects,setProjects] = useState()
  const [vendors,setVendors] = useState()
  const [assetModels,setAssetModels] = useState()
  

  const getData = async ()=>{
    const data = await getAllAssets()
    const allProjects = await getAllProjects()
    const allvendors = await getAllVendors()
    setProjects(allProjects)
    setAssetModels(data)
    setVendors(allvendors)
  }
  useEffect(()=>{
    setNewFields((prev) => ({...prev, category:params.categoryId}))
    getData()
  },[])

  const onChange = (event)=>{
    setNewFields((prev) =>({...prev, [event.target.name]:event.target.value}))
  }
  const onSubmit = (event) => {
    event.preventDefault()
    //console.log(newFileds)
    switch(categoryId){
      case "switches":{
        addSwitch(newFileds)
        break;
      }
      case "firewall":{
        addFirewall(newFileds)
        break;
      }
      case "wirless-ap":{
        
        break;
      }
      case "laptop":{
        
        break;
      }
      case "desktop":{
        
        break;
      }
      case "mobile":{
        
        break;
      }
      case "licence":{
        
        break;
      }
      case "support":{
        
        break;
      }
    }
    
  }
  const {categoryId} = params
  // switch(categoryId){
  //   case "switches":{
      return (
        <div className='w-full px-16 py-4'>
          <h3 className='text-2xl text-white font-bold mb-3'>Add { categoryId.includes("-")? ((categoryId.split("-")[0][0].toUpperCase()+categoryId.split("-")[0].slice(1)) + "-" + categoryId.split("-")[1].toUpperCase()): categoryId[0].toUpperCase() + categoryId.slice(1) }</h3>
          <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
          <form onSubmit={(e)=>onSubmit(e)} className='flex gap-4 flex-wrap justify-between'>
            <label className='flex flex-col w-full gap-1'>
              <span className='text-slate-300 text-base font-bold'>Project</span>
               {/* <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input> */}
               <select type='text' name='projectName' defaultValue="DEFAULT" onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '>
                <option value="DEFAULT" disabled>Select project</option>
                {projects && projects.map(project => (<option key={project.title} value={project}>{project.projectName}</option>))}
               </select>
            </label>

            <label className='flex flex-col w-full gap-1'>
              <span className='text-slate-300 text-base font-bold'>Asset Name</span>
               <input type='text' name='assetName' onChange={(e) => onChange(e)}  placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
            </label>

            {["switches","firewall","wireless-ap","laptop"].includes(categoryId) && (<label className='flex flex-col w-[48%] gap-1'>
              <span className='text-slate-300 text-base font-bold'>Vendor</span>
              {console.log(categoryId)}
               <select name='assetVendor' defaultValue='DEFAULT' onChange={(e) => onChange(e)}  placeholder='Manufacturer' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '>
                <option value="DEFAULT" disabled>Select Vendor</option>
                {vendors && vendors.map(vendor => <option key={vendor.title} value={vendor.title}>{vendor.title}</option>)}
               </select>
            </label>)}

            {["support","licence","wireless-ap","laptop"].includes(categoryId) && (<label className='flex flex-col w-[48%] gap-1'>
              <span className='text-slate-300 text-base font-bold'>Provider</span>
              {console.log(categoryId)}
               <select name='assetProvider' defaultValue='DEFAULT' onChange={(e) => onChange(e)}  placeholder='Manufacturer' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '>
                <option value="DEFAULT" disabled>Select Provider</option>
                {vendors && vendors.map(vendor => <option key={vendor.title} value={vendor.title}>{vendor.title}</option>)}
               </select>
            </label>)}

            <label className='flex flex-col w-[48%] gap-1'>
              <span className='text-slate-300 text-base font-bold'>Model</span>
               <select name='assetModel' defaultValue='DEFAULT' onChange={(e) => onChange(e)}  className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '>
                <option value="DEFAULT" disabled>Select Asset Model</option>
                {assetModels && assetModels.map(model => {
                  if(model.vendor === newFileds.assetVendor)
                    { return <option key={model.title} value={model.title}>{model.title}</option>}
                })}
               </select>
            </label>
            <label className='flex flex-col w-[48%] gap-1'>
              <span className='text-slate-300 text-base font-bold'>Serial Number</span>
               <input type='text' name='assetSerial' onChange={(e) => onChange(e)}  placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
            </label>
            
            <label className='flex flex-col w-[48%] gap-1'>
              <span className='text-slate-300 text-base font-bold'>Purchased Date</span>
               <input type='date' name='datePurchased' onChange={(e) => onChange(e)} className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
            </label>
            <label className='flex flex-col w-full gap-1'>
              <span className='text-slate-300 text-base font-bold'>Image</span>
               <input type='text' name='assetImage' onChange={(e) => onChange(e)}  placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
            </label>
            <label className='flex flex-col w-full gap-1'>
              <span className='text-slate-300 text-base font-bold'>Comments</span>
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
  //     break;
  //   }
  //   case "firewall":{
  //     return (
  //       <div className='w-full px-16 py-4'>
  //         <h3 className='text-2xl text-white font-bold mb-3'>Add { categoryId.includes("-")? ((categoryId.split("-")[0][0].toUpperCase()+categoryId.split("-")[0].slice(1)) + "-" + categoryId.split("-")[1].toUpperCase()): categoryId[0].toUpperCase() + categoryId.slice(1) }</h3>
  //         <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
  //         <form onSubmit={(event)=>onSubmit(event)} className='flex gap-6 flex-wrap justify-between'>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Project</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Model</span>
  //              <input type='text' name='assetModel' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Serial Number</span>
  //              <input type='text' name='assetSerial' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Asset Name</span>
  //              <input type='text' name='assetName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Purchased Date</span>
  //              <input type='text' name='datePurchased' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Image</span>
  //              <input type='text' name='assetImage' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Comments</span>
  //              <input type='text' name='comments' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <div className='w-full flex gap-4 justify-end mt-6'>
  //             <button className='bg-red-400/80 py-2 px-4 rounded-lg text-slate-100'>Cancel</button>
  //             <button className='bg-emerald-400/80 py-2 px-4 rounded-lg text-slate-100'>Save</button>
  //           </div>
  //         </form>
  //         </div>
          
  //       </div>
  //     )
  //     break;
  //   }
  //   case "wirless-ap":{
  //     return (
  //       <div className='w-full px-16 py-8'>
  //         <h3 className='text-2xl text-white font-bold mb-3'>Add { categoryId.includes("-")? ((categoryId.split("-")[0][0].toUpperCase()+categoryId.split("-")[0].slice(1)) + "-" + categoryId.split("-")[1].toUpperCase()): categoryId[0].toUpperCase() + categoryId.slice(1) }</h3>
  //         <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
  //         <form onSubmit={(event)=>onSubmit(event)}  className='flex gap-6 flex-wrap justify-between'>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Project</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Model</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Serial Number</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Asset Name</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Purchased Date</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Image</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Comments</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <div className='w-full flex gap-4 justify-end mt-6'>
  //             <button className='bg-red-400/80 py-2 px-4 rounded-lg text-slate-100'>Cancel</button>
  //             <button className='bg-emerald-400/80 py-2 px-4 rounded-lg text-slate-100'>Save</button>
  //           </div>
  //         </form>
  //         </div>
          
  //       </div>
  //     )
  //     break;
  //   }
  //   case "laptop":{
  //     return (
  //       <div className='w-full px-16 py-8'>
  //         <h3 className='text-2xl text-white font-bold mb-3'>Add { categoryId.includes("-")? ((categoryId.split("-")[0][0].toUpperCase()+categoryId.split("-")[0].slice(1)) + "-" + categoryId.split("-")[1].toUpperCase()): categoryId[0].toUpperCase() + categoryId.slice(1) }</h3>
  //         <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
  //         <form onSubmit={(event)=>onSubmit(event)}  className='flex gap-6 flex-wrap justify-between'>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Project</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Model</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Serial Number</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Asset Name</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Purchased Date</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Image</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Comments</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <div className='w-full flex gap-4 justify-end mt-6'>
  //             <button className='bg-red-400/80 py-2 px-4 rounded-lg text-slate-100'>Cancel</button>
  //             <button className='bg-emerald-400/80 py-2 px-4 rounded-lg text-slate-100'>Save</button>
  //           </div>
  //         </form>
  //         </div>
          
  //       </div>
  //     )
  //     break;
  //   }
  //   case "desktop":{
  //     return (
  //       <div className='w-full px-16 py-8'>
  //         <h3 className='text-2xl text-white font-bold mb-3'>Add { categoryId.includes("-")? ((categoryId.split("-")[0][0].toUpperCase()+categoryId.split("-")[0].slice(1)) + "-" + categoryId.split("-")[1].toUpperCase()): categoryId[0].toUpperCase() + categoryId.slice(1) }</h3>
  //         <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
  //         <form onSubmit={(event)=>onSubmit(event)}  className='flex gap-6 flex-wrap justify-between'>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Project</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Model</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Serial Number</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Asset Name</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Purchased Date</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Image</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Comments</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <div className='w-full flex gap-4 justify-end mt-6'>
  //             <button className='bg-red-400/80 py-2 px-4 rounded-lg text-slate-100'>Cancel</button>
  //             <button className='bg-emerald-400/80 py-2 px-4 rounded-lg text-slate-100'>Save</button>
  //           </div>
  //         </form>
  //         </div>
          
  //       </div>
  //     )
  //     break;
  //   }
  //   case "mobile":{
  //     return (
  //       <div className='w-full px-16 py-8'>
  //         <h3 className='text-2xl text-white font-bold mb-3'>Add { categoryId.includes("-")? ((categoryId.split("-")[0][0].toUpperCase()+categoryId.split("-")[0].slice(1)) + "-" + categoryId.split("-")[1].toUpperCase()): categoryId[0].toUpperCase() + categoryId.slice(1) }</h3>
  //         <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
  //         <form onSubmit={(event)=>onSubmit(event)}  className='flex gap-6 flex-wrap justify-between'>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Project</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Model</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Serial Number</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Asset Name</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Purchased Date</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Image</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Comments</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <div className='w-full flex gap-4 justify-end mt-6'>
  //             <button className='bg-red-400/80 py-2 px-4 rounded-lg text-slate-100'>Cancel</button>
  //             <button className='bg-emerald-400/80 py-2 px-4 rounded-lg text-slate-100'>Save</button>
  //           </div>
  //         </form>
  //         </div>
          
  //       </div>
  //     )
  //     break;
  //   }
  //   case "licence":{
  //     return (
  //       <div className='w-full px-16 py-8'>
  //         <h3 className='text-2xl text-white font-bold mb-3'>Add { categoryId.includes("-")? ((categoryId.split("-")[0][0].toUpperCase()+categoryId.split("-")[0].slice(1)) + "-" + categoryId.split("-")[1].toUpperCase()): categoryId[0].toUpperCase() + categoryId.slice(1) }</h3>
  //         <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
  //         <form onSubmit={(event)=>onSubmit(event)}  className='flex gap-6 flex-wrap justify-between'>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Project</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Model</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Serial Number</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Asset Name</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Purchased Date</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Image</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Comments</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <div className='w-full flex gap-4 justify-end mt-6'>
  //             <button className='bg-red-400/80 py-2 px-4 rounded-lg text-slate-100'>Cancel</button>
  //             <button className='bg-emerald-400/80 py-2 px-4 rounded-lg text-slate-100'>Save</button>
  //           </div>
  //         </form>
  //         </div>
          
  //       </div>
  //     )
  //     break;
  //   }
  //   case "support":{
  //     return (
  //       <div className='w-full px-16 py-8'>
  //         <h3 className='text-2xl text-white font-bold mb-3'>Add { categoryId.includes("-")? ((categoryId.split("-")[0][0].toUpperCase()+categoryId.split("-")[0].slice(1)) + "-" + categoryId.split("-")[1].toUpperCase()): categoryId[0].toUpperCase() + categoryId.slice(1) }</h3>
  //         <div className='bg-slate-700 w-full px-16 py-8 rounded-lg'>
          
  //         <form onSubmit={(event)=>onSubmit(event)} className='flex gap-6 flex-wrap justify-between'>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Project</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Model</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Serial Number</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Asset Name</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-[48%] gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Purchased Date</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Image</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <label className='flex flex-col w-full gap-1'>
  //             <span className='text-slate-300 text-lg font-bold'>Comments</span>
  //              <input type='text' name='projectName' onChange={(e) => onChange(e)} placeholder='Model' className='p-2 rounded-lg bg-slate-800 focus:outline-none focus:bg-slate-950 text-slate-300 '></input>
  //           </label>
  //           <div className='w-full flex gap-4 justify-end mt-6'>
  //             <button className='bg-red-400/80 py-2 px-4 rounded-lg text-slate-100'>Cancel</button>
  //             <button className='bg-emerald-400/80 py-2 px-4 rounded-lg text-slate-100'>Save</button>
  //           </div>
  //         </form>
  //         </div>
          
  //       </div>
  //     )
  //     break;
  //   }
  // }
  

}

export default AddNewAsset