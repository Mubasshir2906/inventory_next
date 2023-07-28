import React from 'react'

const cardsSmall = ({props}) => {
  return (
    <div className={`${props.color} p-6 w-full rounded-md flex flex-col gap-1`} >
        <p className='text-slate-100 text-lg'>{props.title}</p>
        <h1 className='text-3xl text-slate-100 font-bold'>{props.value}</h1>
        <div className='flex w-full justify-between font-bold'>
            <p className='text-slate-100 text-lg'>{props.subtitle}</p>
            <p className='text-slate-100 text-lg'>{props.subtitleValue}</p>
        </div>
    </div>
  )
}

export default cardsSmall