import express from "express";
import {SignUp,Login,LogOut} from "../controllers/userController.js";
import {getUserData } from "../jwt/getUserData.js";
const router=express.Router();
router.post("/register",SignUp);
router.post("/login",Login);
router.post("/logout",LogOut);
router.get("/getdata",getUserData);

export default router;