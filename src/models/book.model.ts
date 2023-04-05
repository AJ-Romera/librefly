import mongoose from "mongoose";

export interface IBook extends mongoose.Document {
  name: string;
  isbn: string;
  author_first_name: string;
  author_last_name: string;
}

const bookSchema = new mongoose.Schema<IBook>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    author_first_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    author_last_name: {
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

export default mongoose.model<IBook>("Book", bookSchema);
