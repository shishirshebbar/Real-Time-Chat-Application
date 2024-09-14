import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";

const GetConversationhooks = () => {
    const [loading,setloading]= useState(false);
    const[conversations,setconversations] =useState([]);
    useEffect(()=>{
        const getConversation = async()=>{
            setloading(true);
            try{
                const result = await fetch("api/users");
                const data = await result.json();
                if(data.error){
                    throw new Error(data.error)
                }setconversations(data);

            }catch(error){
                toast.error(error.message);

            }finally{
                setloading(false);

            }
        };
        getConversation();
    },[]);
    return {loading,conversations};
  
}

export default GetConversationhooks