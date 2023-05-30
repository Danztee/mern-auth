import express from "express";
import { updateProfile, getProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getProfile);
router.put("/", protect, updateProfile);

export default router;
