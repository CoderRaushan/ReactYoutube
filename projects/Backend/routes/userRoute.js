import express from "express";
import {SignUp} from "../controllers/userController.js";

const router=express.Router();

router.post("/register",SignUp);

export default router;