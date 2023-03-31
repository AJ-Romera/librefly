import { Request, Response } from "express";
import Book, { IBook } from "../models/book.model";

export const createBook = async (req: Request, res: Response) => {
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
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books: IBook[] = await Book.find().populate("author");
    books && books.length > 0
      ? res.status(200).json(books)
      : res.status(400).json({ message: "No books found" });
  } catch (error) {
    console.error(error);
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;

    if (bookId.length < 24 || bookId.length > 24) {
      res
        .status(404)
        .json({ message: "Error: The id should be 24 characters long" });
    } else {
      const book = await Book.findById(bookId).populate("author");

      book
        ? res.status(200).json(book)
        : res.status(404).json({ message: "Book not found with the given id" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
    }).populate("author");

    updatedBook
      ? res.status(200).json(updatedBook)
      : res.status(400).json({
          message:
            "Error: Could not update the book. The given id or the data is not correct",
        });
  } catch (error) {
    console.error(error);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;

    if (bookId.length < 24 || bookId.length > 24) {
      res
        .status(404)
        .json({ message: "Error: The id should be 24 characters long" });
    } else {
      const book = await Book.findByIdAndDelete(bookId);
      book
        ? res.status(200).json(book)
        : res.status(404).json({ message: "Book not found with the given id" });
    }
  } catch (error) {
    console.error(error);
  }
};
