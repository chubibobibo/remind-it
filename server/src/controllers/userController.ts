import { Request, Response } from "express";
import { ExpressError } from "../ExpressError/ExpressError";
import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel";

// REGISTER USER
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

// LOGIN USER
export const login = async (req: Request, res: Response) => {
  if (!req.body) {
    throw new ExpressError("No data received", StatusCodes.BAD_REQUEST);
  }

  const foundUser = await UserModel.findOne({ username: req.body.username });
  if (!foundUser) {
    throw new ExpressError("User does not exist", StatusCodes.NOT_FOUND);
  }
  res.status(StatusCodes.OK).json({ message: "User found", foundUser });
};

// UPDATE USER
export const updateUser = async (req: Request, res: Response) => {
  if (!req.body) {
    throw new ExpressError("No data received", StatusCodes.BAD_REQUEST);
  }

  const { id } = req.params; //obtain id from params passed in the api call

  try {
    const foundUser = await UserModel.findById(id);
    if (!foundUser) {
      throw new ExpressError("Unauthorized", StatusCodes.UNAUTHORIZED);
    }
    await foundUser.setPassword(req.body.password);
    await foundUser.save();

    const updatedUser = await UserModel.findByIdAndUpdate(
      foundUser._id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      throw new ExpressError("Problem updating user", StatusCodes.BAD_REQUEST);
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "User successfully updated", updatedUser });
  } catch (err) {
    console.log(err);
  }
};
