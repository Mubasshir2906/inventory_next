"use client"
import React, { useEffect, useState } from 'react'
import AssetCategories from '@/app/sampleData/allAssetCategories.json'
import NewAssetCard from '@/app/_components/NewAssetCard'

const AddNewCategory = () => {
    const [categories, setCategories] = useState()

    useEffect(()=>{
        setCategories(AssetCategories)
    },[])
  return (
    <div className='p-4'>
        <h4 className='text-slate-100 text-2xl font-bold mb-3'>Categories</h4>
        <div className='flex flex-wrap gap-4'>
            {categories && categories.map((item) => (
                <div key={item._id}>
                    <NewAssetCard asset={item} />
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default AddNewCategory