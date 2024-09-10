import React from 'react'
import { MdManageSearch } from "react-icons/md";

function SerachInput() {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <MdManageSearch className='w-6 h-6 outline-none' />
    </button>
    </form>
  )
}

export default SerachInput