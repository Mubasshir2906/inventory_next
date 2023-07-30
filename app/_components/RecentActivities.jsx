import React from 'react'
import RecentActivites from '@/app/sampleData/recentActivities.json'

const RecentActivities = () => {
  return (
    <div className='bg-slate-700/50'>
        <table className='w-full text-slate-400 text-sm'>
            <thead className='font-bold bg-slate-600 text-slate-300'>
                <tr className=''>
                    <th className='w-[10%] p-2'>Date</th>
                    <th className='w-[20%] p-2'>Asset</th>
                    <th className='w-[20%] p-2'>Serial</th>
                    <th className='w-[10%] p-2'>Action</th>
                    <th className='w-[30%] p-2'>Description</th>
                    <th className='w-[10%] p-2'>User</th>
                </tr>
            </thead>
            <tbody>
                {RecentActivites.map(activity => (
                    <tr className='hover:bg-slate-700'>
                        <td className='text-center p-2'>{activity.date}</td>
                        <td className='text-center p-2'>{activity.asset}</td>
                        <td className='text-center p-2'>{activity.serial}</td>
                        <td className='text-center p-2'>{activity.action}</td>
                        <td className='text-center p-2'>{activity.description}</td>
                        <td className='text-center p-2'>{activity.user}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    </div>
  )
}

export default RecentActivities