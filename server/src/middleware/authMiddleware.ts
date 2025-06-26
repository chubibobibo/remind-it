import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { ExpressError } from "../ExpressError/ExpressError";
import { StatusCodes } from "http-status-codes";

export const loginMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("local", (err: any, user: any, info: any) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: info.message || "Username or password incorrect",
      });
    }
    // Once user is authenticated
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return loginMiddleware(req, res);
    });
  });
};
