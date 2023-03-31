import express from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/book.controller";

const router = express.Router();

// Create a book
router.post("/books", createBook);

// Read/get books
router.get("/books", getBooks);

// read/get a book
router.get("/books/:bookId", getBook);

// Update a book
router.put("/books/:bookId", updateBook);

// Delete a book
router.delete("/books/:bookId", deleteBook);

export default router;
