import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";

import { addReminder } from "../controllers/reminderController";

router.post("/addReminder", asyncHandler(addReminder));

export default router;
