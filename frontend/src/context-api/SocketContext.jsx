import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";


const SocketContext = createContext();

export const useSocketContext=()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children})=>{

    const [socket,setsocket]=useState(null);
    const [onlineusers,setonlineusers]=useState([]);
    const {authorizeduser}= useAuthContext();
    useEffect(()=>{
        if(authorizeduser){
            const socket = io("http://localhost:5000",{
                query:{
                    userId:authorizeduser._id
                }
            });
            setsocket(socket);
            socket.on("getonlineusers",(users)=>{
                setonlineusers(users)
            })
            return ()=>socket.close();
        }else{
            if(socket){
                socket.close();
                setsocket(null);
            }
        }
    },[authorizeduser]);
    return(
        <SocketContext.Provider value={{socket,onlineusers}}>
            {children}
        </SocketContext.Provider>
    )
}