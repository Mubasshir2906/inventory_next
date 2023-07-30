import Link from 'next/link';
import React from 'react'
import { PiDesktopBold } from "react-icons/pi";
import { usePathname } from 'next/navigation'



const NewAssetCard = ({asset}) => {
    //const assetIcon = "<"+asset.icon+">"
    const pathname = usePathname()
  return (
    <Link href={`${pathname}/${asset.category}`}><div className='w-[280px] group p-4 flex justify-between items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg drop-shadow-md hover:drop-shadow-lg hover:cursor-pointer hover:bg-gradient-to-l hover:from-purple-900 hover:to-purple-800'>
        <div className='flex flex-col gap-1'>
            <h3 className='text-slate-300 text-xl font-bold group-hover:text-slate-200'>{asset.title}</h3>
            <p className='text-slate-300 group-hover:text-slate-200'>{asset.description}</p>
        </div>
        <span className='w-[20%] text-4xl text-slate-300/30 group-hover:text-slate-200'><PiDesktopBold/></span>
    </div></Link>
  )
}

export default NewAssetCard