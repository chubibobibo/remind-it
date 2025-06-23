import { Request, Response } from "express";
import { ExpressError } from "../ExpressError/ExpressError";
import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel";

export const register = async (req: Request, res: Response) => {
  if (!req.body) {
    throw new ExpressError("No data received", StatusCodes.BAD_REQUEST);
  }

  const isAdmin = (await UserModel.countDocuments()) === 0;
  req.body.role = isAdmin ? "admin" : "user";
  try {
    const registeredUser = await UserModel.create(req.body);
    await registeredUser.setPassword(req.body.password);
    await registeredUser.save();
    res
      .status(StatusCodes.OK)
      .json({ message: "User successfully registered", registeredUser });
    if (!registeredUser) {
      throw new ExpressError(
        "Cannot register user",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  } catch (err) {
    console.log(err);
  }
};
