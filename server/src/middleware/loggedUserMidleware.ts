import { Request, Response, NextFunction } from "express";
import UserModel from "../models/UserModel";
import { ExpressError } from "../ExpressError/ExpressError";
import { StatusCodes } from "http-status-codes";

interface RequestUserType extends Request {
  user: {
    _id: string;
  };
}

// export const isLoggedIn = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (!req.user) {
//     throw new ExpressError("User unauthorized", StatusCodes.UNAUTHORIZED);
//   }
//   async (req: RequestUserType, res: Response, next: NextFunction) => {
//     try {
//       if (req.user) {
//         const user = await UserModel.findById(req.user._id);
//         res.status(StatusCodes.OK).json(user);
//       }
//     } catch (err) {
//       next();
//     }
//   };
//   next();
// };

// Using req.authenticated method from passport
export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) {
    throw new ExpressError(
      "Sorry, user is not authorized",
      StatusCodes.UNAUTHORIZED
    );
  } else {
    next();
  }
};
