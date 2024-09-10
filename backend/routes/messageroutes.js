import express from "express";
import protectedRoute from "../Middlewares/protectedroute.js";

import {sendmessage,getmessages} from "../controllers/messagecontroller.js"
const router=express.Router();
//get messages
router.get("/:id",protectedRoute,getmessages);
router.post("/send/:id",protectedRoute,sendmessage);//protect route before running the function



export default router;