import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri: any = process.env.MONGO_URI;

const mongooseOptions: Object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, mongooseOptions)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error({ error: error.message });
  });
