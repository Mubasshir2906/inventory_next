'use client'
import Link from 'next/link';
import React from 'react'
import {usePathname } from 'next/navigation'
import { BsFillPlusCircleFill } from "react-icons/bs";

const ProjectsList = () => {
  const currentRoute = usePathname()
  return (
    <div>
        <ul className='flex flex-col items-start gap-5 text-base text-cyan-100 w-[80%] mx-auto '>
            <li><Link href='/assets' className={currentRoute === '/assets' ? "text-indigo-500 text-lg ":""}>Assets</Link></li>
            <li><Link href='/licences' className={currentRoute === '/licences' ? "text-indigo-500 text-lg ":""}>Licenses</Link></li>
            <li><Link href='/vendor-support' className={currentRoute === '/vendor-support' ? "text-indigo-500 text-lg ":""}>Vendor support</Link></li>
            <li><Link href='/accessories' className={currentRoute === '/accessories' ? "text-indigo-500 text-lg ":""}>Accessories</Link></li>
            <li><Link href='/consumables' className={currentRoute === '/consumables' ? "text-indigo-500 text-lg ":""}>Consumables</Link></li>
            <li><Link href='/components' className={currentRoute === '/components' ? "text-indigo-500 text-lg ":""}>Components</Link></li>
            <li><Link href='/people' className={currentRoute === '/people' ? "text-indigo-500 text-lg ":""}>People</Link></li>
            <li><Link href='/projects' className={currentRoute === '/projects' ? "text-indigo-500 text-lg ":""}>Projects</Link></li>
            <li><Link href='/settings' className={currentRoute === '/settings' ? "text-indigo-500 text-lg ":""}>Settings</Link></li>
        </ul>
    </div>
  )
}

export default ProjectsList