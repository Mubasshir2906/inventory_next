'use client'
import React, { useEffect, useState } from 'react'
import Switches from '@/app/sampleData/switches.json'

const SwitchesTable = () => {
  const [switches, setSwitches] = useState()

  useEffect(()=>{
    setSwitches(Switches)
  },[])
  return (
    <div className='w-full p-3 '>
      <h1 className='text-2xl text-slate-100 font-bold'>Switches</h1>
      {switches && <div className='mt-3 bg-slate-700/50 rounded-md'>
        <table className='w-full text-slate-300 text-sm  '>
          <thead className=''>
            <tr className=''>
              <th className='w-[5%] text-center p-3'>#</th>
              <th className='w-[20%] text-center p-3'>Model</th>
              <th className='w-[10%] text-center p-3'>Serial</th>
              <th className='w-[15%] text-center p-3'>Prject</th>
              
              <th className='w-[20%] text-center p-3'>Status</th>
              <th className='w-[15%] text-center p-3'>Check-In</th>
              <th className='w-[15%] text-center p-3'>Check-In</th>
            </tr>
           
          </thead>
          <tbody>
            {switches.map((item,index) => (<tr key={index} className='hover:bg-slate-800'>
              <td className='text-center p-3 text-slate-400'>{index+1}</td>
              <td className='text-center p-3 text-slate-400'>{item.model}</td>
              <td className='text-center p-3 text-slate-400'>{item.serial}</td>
              <td className='text-center p-3 text-slate-400'>{item.projectName}</td>
              <td className='text-center p-3 text-slate-400'>{item.status}</td>
              <td className='text-center p-3 text-slate-400'>{item.dateIn}</td>
              <td className='text-center p-3 text-slate-400'>{item.dateOut}</td>
            </tr>))}
          </tbody>
        </table>
        </div>}
    </div>
  )
}

export default SwitchesTable