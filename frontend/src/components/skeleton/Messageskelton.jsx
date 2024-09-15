import React from 'react'

const Messageskelton = () => {
  return (
    <>
            <div className='flex gap-4 items-center'>
        <div className='skeleton w-12 h-12 rounded-full shrink-0'></div>
        <div className='flex flex-col gap-2'> 
            <div className='skeleton h-4 w-48'></div>
            <div className='skeleton h-4 w-36'></div>   </div>
        </div>
        <div className='flex gap-4 items-center justify-end mt-4'>
        <div className='flex flex-col gap-2'>
            <div className='skeleton h-4 w-48'></div> 
        </div>
        <div className='skeleton w-12 h-12 rounded-full shrink-0'></div>
        </div>

    </>
  )
}

export default Messageskelton