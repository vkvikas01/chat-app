import { Router } from "express";
import { signup } from "../controllers/AuthController.js";

const authRoutes=Router();
authRoutes.post("/signUp",signup);

export default authRoutes;