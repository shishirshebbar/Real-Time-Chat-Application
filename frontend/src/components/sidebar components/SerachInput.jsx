import React from 'react'
import { MdManageSearch } from "react-icons/md";
import useConversation from '../../zustand/useConversation';
import GetConversationhooks from '../../hooks/GetConversationhooks';
import toast from 'react-hot-toast';
import { useState } from 'react';


function SerachInput() {
  const [search,setsearch]= useState("");
  const {setselectedconversation} = useConversation();
  const {conversations} = GetConversationhooks();
  const handlesubmit= (e)=>{
    e.preventDefault();
    if(!search){
      return;
    }
    if(search.length<1){
      return toast.error("Search item should be minimum of 1 character")
    }
    const conversation = conversations.find((c)=>c.fullname.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setselectedconversation(conversation);
      setsearch("");
    }else{
      toast.error("No suh user found")
    }
  
  
  }


  return (
    <form onSubmit={handlesubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Search…' className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        
        />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <MdManageSearch className='w-6 h-6 outline-none' />
    </button>
    </form>
  )
}

export default SerachInput