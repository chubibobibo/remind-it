import express from "express";
import { login, register, updateUser } from "../controllers/userController";
import {
  registerValidation,
  loginValidation,
  updateUserValidation,
} from "../middleware/inputValidationMiddleware";
import { isLoggedIn } from "../middleware/loggedUserMidleware";

import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { StatusCodes } from "http-status-codes";
import { rateLimit } from "express-rate-limit";

const router = express.Router();

// Express Rate Limit
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  limit: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
  message: "Too many login attempts. Try again after 10mins",
  validate: true,
});

// REGISTER
router.post("/register", registerValidation, register);

//LOGIN
router.post(
  "/login",
  loginValidation,
  limiter,
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

// UPDATE
router.patch("/updateUser/:id", updateUserValidation, isLoggedIn, updateUser);

export default router;
