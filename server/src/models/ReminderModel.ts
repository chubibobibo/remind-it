import mongoose from "mongoose";

const { Schema } = mongoose;

const ReminderSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    reminderBody: {
      type: String,
      required: true,
    },

    // author: {
    //   type: Schema.Types.ObjectId,
    //   ref: "UserModel",
    // },
  },
  { timestamps: true }
);

const ReminderModel = mongoose.model("ReminderModel", ReminderSchema);

export default ReminderModel;
