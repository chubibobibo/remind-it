import mongoose from "mongoose";

// getting-started.js

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/remind-it");
}
