import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/", login);
router.post("/register", register);
router.get("/logout", logout);

export default router;
