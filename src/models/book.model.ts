import mongoose from "mongoose";

export interface IBook extends mongoose.Document {
  name: string;
  isbn: number;
  author: string;
}

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isbn: {
      type: Number,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model<IBook>("Book", bookSchema);
