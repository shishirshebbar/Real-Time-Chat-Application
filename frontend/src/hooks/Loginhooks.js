import { useState } from "react"
import { useAuthContext } from "../context-api/AuthContext";
import toast from "react-hot-toast";

const LoginHooks=()=>{
    const[loading,setloading]=useState(false);
    const {setauthorizeduser} = useAuthContext();
    const login = async(username,password)=>{
        const success = handleInputErrors({username,password});
        if(!success) return;
        setloading(true);
        try{
            const result = await fetch("/api/authorized/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
                body:JSON.stringify({username,password})
            });
            const data =await result.json();
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data));
            setauthorizeduser(data);
        }catch(error){
            toast.error(error.message);

        }finally{
            setloading(false)

        }
    }
    return {loading,login}
}


export default LoginHooks;

function handleInputErrors({username,password}){
    if (!username||!password){
        toast.error("Please fill in all the fields");
        return false;
    }
    return true;
}