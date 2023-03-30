import mongoose from "mongoose";

export interface IBook extends mongoose.Document {
  name: string;
  isbn: string;
  author: mongoose.Types.ObjectId;
}

const bookSchema = new mongoose.Schema<IBook>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isbn: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model<IBook>("Book", bookSchema);
