import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import { roles } from "../utils/roles";
// import { PassportLocalSchema } from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: Object.values(roles),
    },
  },
  { timestamps: true }
);

//use passport local mongoose as plugin in the UserSchema
UserSchema.plugin(passportLocalMongoose); // allows creation of unique username and passwords.
const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;
