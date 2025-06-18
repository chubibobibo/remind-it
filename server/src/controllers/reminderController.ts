import { Request, Response } from "express";
import ReminderModel from "../models/ReminderModel";
import { ExpressError } from "../ExpressError/ExpressError";
import { StatusCodes } from "http-status-codes";

export const addReminder = async (req: Request, res: Response) => {
  if (!req.body) {
    throw new ExpressError("No data received", StatusCodes.BAD_REQUEST);
  }
  const newReminder = await ReminderModel.create(req.body);
  if (!newReminder) {
    throw new ExpressError(
      "Cannot create a new reminder",
      StatusCodes.BAD_REQUEST
    );
  }
  res.status(StatusCodes.OK).json({ message: "New reminder created" });
};
