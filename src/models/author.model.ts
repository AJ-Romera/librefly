import mongoose from "mongoose";

export interface IAuthor extends mongoose.Document {
  first_name: string;
  last_name: string;
}

const authorSchema = new mongoose.Schema<IAuthor>(
  {
    first_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model<IAuthor>("Author", authorSchema);
