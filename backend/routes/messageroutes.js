import express from "express";

import {sendmessage} from "../controllers/messagecontroller.js"
const router=express.Router();
router.post("/send/:id",sendmessage);//protect route before running the function



export default router;