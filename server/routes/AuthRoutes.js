import { Router } from "express";
import { getUserInfo, login, signup } from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";

const authRoutes=Router();
authRoutes.post("/signUp",signup);
authRoutes.post("/login",login)
authRoutes.get("/user-info",verifyToken, getUserInfo)

export default authRoutes;