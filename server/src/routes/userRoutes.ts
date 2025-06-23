import express from "express";
import { register } from "../controllers/userController";
import { registerValidation } from "../utils/expressValidator/formInputValidation";

const router = express.Router();

router.post("/register", registerValidation, register);

export default router;
