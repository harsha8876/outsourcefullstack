import express from "express";
import { register, login, logout, forgotpassword, resetpassword,  } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/forgotpassword", forgotpassword)
router.patch("/resetpassword/:token", resetpassword)

export default router;