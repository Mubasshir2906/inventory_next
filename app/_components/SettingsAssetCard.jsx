import React from 'react'

const SettingsAssetCard = ({category}) => {
  return (
    <div className='bg-indigo-500  overflow-hidden rounded-lg px-3 py-2'>
        <h3 className='text-white text-lg font-bold'>{category.title}</h3>
    </div>
  )
}

export default SettingsAssetCard