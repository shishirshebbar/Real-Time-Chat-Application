import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const GetMessagehooks = () => {
  const [loading,setloading]= useState(false);
  const {messages,setmessages,selectedconversation}= useConversation();
  useEffect(()=>{
    const getmessages=async()=>{
        setloading(true);
        try{
            const result = await fetch(`/api/messages/${selectedconversation._id}`);
            
            const data =await result.json();
            if(data.error){
                throw new Error(data.error);
            }
            setmessages(data);
        }catch(error){
            toast.error(error.message);

        }finally{
            setloading(false);
        }
    }
    if(selectedconversation?._id){
        getmessages();
    }
  },[selectedconversation?._id,setmessages]);
  return {messages,loading}
}

export default GetMessagehooks