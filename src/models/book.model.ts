import mongoose from "mongoose";

export interface IBook extends mongoose.Document {
  name: string;
  isbn: string;
  author_first_name: string;
  author_last_name: string;
  cover: string;
  blurb: string;
  genre: string;
  pages: number;
  publisher: string;
  binding: string;
  year_of_publication: number;
  release_date: string;
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
      trim: true,
    },
    author_last_name: {
      type: String,
      required: true,
      trim: true,
    },
    cover: {
      type: String,
      required: true,
      trim: true,
    },
    blurb: {
      type: String,
      trim: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    pages: {
      type: Number,
      trim: true,
    },
    publisher: {
      type: String,
      trim: true,
    },
    binding: {
      type: String,
      trim: true,
    },
    year_of_publication: {
      type: Number,
      trim: true,
    },
    release_date: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model<IBook>("Book", bookSchema);
