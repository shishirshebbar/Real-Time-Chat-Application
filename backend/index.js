import express from "express";
import dotenv from "dotenv";
import authorizedroutes from "./routes/authroutes.js";
import connecttoMongo from "./databaseconfig/db.js";
import path from 'path';
import { fileURLToPath } from 'url';
import messageroutes from "./routes/messageroutes.js"
import cookieParser from "cookie-parser";
import userroutes from "./routes/userroutes.js";
import { app, server } from "./socket/socket.js";

const PORT=process.env.PORT||5000;

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use(cookieParser());
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.use("/api/authorized",authorizedroutes);
app.use("/api/messages", messageroutes);
app.use("/api/users", userroutes);

server.listen(PORT,()=>{connecttoMongo();
    console.log(`Running on ${PORT}`)});
