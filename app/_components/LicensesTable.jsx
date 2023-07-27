'use client'
import React, { useEffect, useState } from 'react'
import Licences from '@/app/sampleData/licences.json'

const LicencesTable = () => {
  const [licences, setLicences] = useState()

  useEffect(()=>{
    setLicences(Licences)
  },[])
  return (
    <div className='w-full p-3 '>
      <h1 className='text-2xl text-slate-100 font-bold'>Licences</h1>
      {licences && <div className='mt-3 bg-slate-700/50 rounded-md'>
        <table className='w-full text-slate-300 text-sm  '>
          <thead className=''>
            <tr className=''>
              <th className='w-[5%] text-center p-3'>#</th>
              <th className='w-[20%] text-center p-3'>Name</th>
              <th className='w-[10%] text-center p-3'>Category</th>
              <th className='w-[15%] text-center p-3'>Assigned</th>
              <th className='w-[20%] text-center p-3'>Installed</th>
              <th className='w-[15%] text-center p-3'>Expiry</th>
            </tr>
           
          </thead>
          <tbody>
            {licences.map((item,index) => (<tr key={index} className='hover:bg-slate-800'>
              <td className='text-center p-3 text-slate-400'>{index+1}</td>
              <td className='text-center p-3 text-slate-400'>{item.name}</td>
              <td className='text-center p-3 text-slate-400'>{item.category}</td>
              <td className='text-center p-3 text-slate-400'>{item.assignedTo}</td>
              <td className='text-center p-3 text-slate-400'>{item.installedOn}</td>
              <td className='text-center p-3 text-slate-400'>{item.expiresOn}</td>
            </tr>))}
          </tbody>
        </table>
        </div>}
    </div>
  )
}

export default LicencesTable