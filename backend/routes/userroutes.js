import express from "express";
import {getusers} from "../controllers/usercontrollers.js";
import protectedRoute  from "../Middlewares/protectedroute.js";
const router = express.Router();

router.get("/",protectedRoute, getusers);

export default router;