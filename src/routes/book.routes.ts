import express from "express";
import Book, { IBook } from "../models/book.model";

const router = express.Router();

// Create a book
router.post("/books", async (req, res) => {
  try {
    const bookFound = await Book.findOne({ isbn: req.body.isbn });
    if (bookFound) {
      return res
        .status(400)
        .json({ message: "There's already a book with this ISBN" });
    }

    const book: IBook = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
  }
});
// Read/get books
// read/get a book
// Update a book
// Delete a book

export default router;
