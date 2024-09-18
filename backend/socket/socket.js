import { Server } from "socket.io";
import http from "http";
import express from "express";

const app= express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
     origin:["http://localhost:3000"]   ,
     methods:["GET","POST"],
    }
});

export const getrecieverid  =  (recieverId)=>{
    return userMap[recieverId];
}

const userMap= {};
//socket.on Listens for events at the client level or the specific connection level (per-client basis).
//io.on for server side.used to handle the connection event.io.on(eventName, callback)
io.on('connection',(socket)=>{
    console.log("User connected",socket.id)
//The handshake process ensures that both the client and server agree on the communication setup and protocols before starting data transfer.
const userId = socket.handshake.query.userId;

if(userId!="undefined"){
    userMap[userId]=socket.id;
}
//io.emit() use dto send events to all connected clients
io.emit("getonlineusers",Object.keys(userMap));

socket.on("disconnect",()=>{
    console.log("User disconnected",socket.id);
    delete userMap[userId];
    io.emit("getonlineusers",Object.keys(userMap));
})
});

export {app,io,server}