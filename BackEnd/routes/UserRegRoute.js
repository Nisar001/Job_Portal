import express from "express";
const router = express.Router();
import UserRegController from "../controllers/UserRegController.js";

// public routes
router.post("/register", UserRegController.UserRegister);
router.post("/login", UserRegController.UserLogin);

// private routes
export default router;