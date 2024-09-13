import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import Logouthooks from '../../hooks/Logouthooks';

function LogoutButton() {
  const {loading,logout}=Logouthooks();
  return (
    <div className='mt-auto'>
        {!loading?(
        <RiLogoutBoxLine className='w-6 h-6 text-white cursor-pointer'
        onClick={logout}/>):(<span className="loading loading-spinner loading-lg"></span>)}
    </div>
  )
}

export default LogoutButton