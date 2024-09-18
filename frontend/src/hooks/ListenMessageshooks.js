import React, { useEffect } from 'react'
import { useSocketContext } from '../context-api/SocketContext'
import useConversation from '../zustand/useConversation';

const ListenMessageshooks=()=> {
    const {socket} = useSocketContext();
    const {messages,setmessages}= useConversation();
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake = true;
            setmessages([...messages,newMessage])
        });
        return ()=>socket?.off("newMessage");
    },[socket,setmessages,messages])
    
}

export default ListenMessageshooks