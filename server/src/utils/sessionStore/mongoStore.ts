import MongoStore from "connect-mongo";
import { ExpressError } from "../../ExpressError/ExpressError";
import { StatusCodes } from "http-status-codes";

//MONGO STORE
const secret = process.env.STORE_SECRET;

// handles the secret variable so that it is always defined
if (!secret) {
  throw new ExpressError(
    "No store secret defined",
    StatusCodes.NOT_IMPLEMENTED
  );
}

const store = MongoStore.create({
  mongoUrl: process.env.MONGO_DB,
  touchAfter: 24 * 3600, // time period in seconds
  crypto: {
    secret: secret,
  },
});
