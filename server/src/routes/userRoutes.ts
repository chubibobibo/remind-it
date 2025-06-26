import express from "express";
import { login, register } from "../controllers/userController";
import { registerValidation } from "../utils/expressValidator/formInputValidation";
import { loginMiddleware } from "../middleware/authMiddleware";

import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { ExpressError } from "../ExpressError/ExpressError";
import { StatusCodes } from "http-status-codes";

const router = express.Router();

router.post("/register", registerValidation, register);

//LOGIN
router.post(
  "/login",
  (req: Request, res: Response, next: NextFunction) => {
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
        return login(req, res);
      });
    })(req, res, next);
  },
  login
);

export default router;
