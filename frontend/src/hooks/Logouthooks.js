import React, { useState } from 'react'
import { useAuthContext } from '../context-api/AuthContext';
import toast from 'react-hot-toast';

const Logouthooks = () => {
    const [loading,setloading]=useState(false);
    const {setauthorizeduser}=useAuthContext();
    const logout=async()=>{
        setloading(true);
        try{
            const result = await fetch("/api/authorized/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" }
    });
    const data = result.json();
    if(data.error){
        throw new Error(data.error);
    }
    localStorage.removeItem("chat-user");
    setauthorizeduser(false);

    }
    catch(error){
        toast.error(error.message);


    }finally{
        setloading(false);
    }

    }
    return {loading,logout};

}

export default Logouthooks