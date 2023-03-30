import express from "express";
import { createAuthor, getAuthors } from "../controllers/author.controller";

const router = express.Router();

// create an author
router.post("/authors", createAuthor);

// get all authors
router.get("/authors", getAuthors);

// get one specific author by it´s id

export default router;
