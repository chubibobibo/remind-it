import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
// import { connectDb } from "../lib/db.js";

const app = express();

app.use(express.json()); // parses json

/** Error handling */
/** @ErrorType type check for err */
interface ErrorType {
  message: string;
  status: number;
}

//Database connection
// getting-started.js

main().catch((err) => console.log(err));
async function main() {
  if (process.env.MONGO_DB) {
    await mongoose.connect(process.env.MONGO_DB);
  }
}

//Test
// app.get("/", (req: Request, res: Response) => {
//   console.log("hello");
//   res.status(200).json({ message: "Hello world" });
// });

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
