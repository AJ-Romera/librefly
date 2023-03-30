import express from "express";
import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from "../controllers/author.controller";

const router = express.Router();

// create an author
router.post("/authors", createAuthor);

// read all authors
router.get("/authors", getAuthors);

// read one specific author by it´s id
router.get("/authors/:authorId", getAuthor);

// update one specific author by it´s id
router.put("/authors/:authorId", updateAuthor);

// delete one specific author by it´s id
router.delete("/authors/:authorId", deleteAuthor);

export default router;
