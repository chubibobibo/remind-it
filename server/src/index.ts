import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import reminderRoutes from "./routes/reminderRoutes";
import userRoutes from "./routes/userRoutes";
import session from "express-session";
// import MongoStore from "connect-mongo";
import { store } from "./utils/sessionStore/mongoStore";
import { ExpressError } from "./ExpressError/ExpressError";
import passport from "passport";
import UserModel from "./models/UserModel";

dotenv.config();
const app = express();

app.use(express.json()); // parses json

/** Error handling */
/** @ErrorType type check for err */
interface ErrorType {
  message: string;
  status: number;
}

//Database connection
main().catch((err) => console.log(err));
async function main() {
  if (process.env.MONGO_DB) {
    await mongoose.connect(process.env.MONGO_DB);
  }
}

// SESSIONS WITH MONGO STORE
const session_secret = process.env.SESSION_SECRET;

if (!session_secret) {
  throw new ExpressError(
    "session secret is not defined",
    StatusCodes.NOT_IMPLEMENTED
  );
}

app.use(
  session({
    store,
    name: process.env.SESSION_NAME,
    secret: session_secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      expires: new Date(Date.now() * 1000 * 60 * 60 * 24 * 7), // 1 week
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

//Test
// app.get("/", (req: Request, res: Response) => {
//   console.log("hello");
//   res.status(200).json({ message: "Hello world" });
// });

// ==Configure passport==
app.use(passport.initialize()); // initializes passport for incoming requests
app.use(passport.session()); // creates passport object (contains user data) in session

// ==Configure passport local==
passport.use(UserModel.createStrategy()); // uses local strategy that was implemented in the UserSchema
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// ==ROUTES==
app.use("/api/reminder/", reminderRoutes);
app.use("/api/user/", userRoutes);

/** @_req is used to indicate that it is unused to avoid parsing errors instead of using '*' to catch everything */
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Page Not Found" });
});
app.use((err: ErrorType, req: Request, res: Response, next: NextFunction) => {
  const message = err.message || "Something went wrong";
  const status = err.status || StatusCodes.BAD_REQUEST;
  res.status(status).json({ message: message });
});

app.listen(process.env.PORT, () => {
  console.log(`LISTENING TO PORT ${process.env.PORT}`);
});
