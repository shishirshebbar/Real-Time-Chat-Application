import React, { useState } from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context-api/AuthContext';

const Signuphooks = () => {
  const [loading,setloading]= useState(false);
  const{setauthorizeduser}=useAuthContext();
  const signup = async({fullname,username,password,confirmpassword,gender})=>{
    const success = handleInputErrors({fullname,username,password,confirmpassword,gender})
    if(!success)      return;
    setloading(true);
    try{
      const result = await fetch("/api/authorized/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullname, username, password, confirmpassword, gender })


    });
    
    const data = await result.json();
    if(data.error){
      throw new Error(data.error);
    }
    localStorage.setItem("chat-user",JSON.stringify(data));
    setauthorizeduser(data);
    }catch(error){
      toast.error(error.message);
    }
    finally{
      setloading(false);
    }
  }
  return {loading,signup}
}

export default Signuphooks;

function handleInputErrors({fullname,username,password,confirmpassword,gender}){
  if(!fullname||!username||!password||!confirmpassword||!gender){
    toast.error("Please fill in all the required fields");
    return false;

  }
  if (password!==confirmpassword){
    toast.error("password and confirm passwords do not match");
    return false;
  }
  if(password.length<6){
    toast.error("Miniumum password length should be 6");
  }
  return true;
}