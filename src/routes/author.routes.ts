import express from "express";
import Author, { IAuthor } from "../models/author.model";

const router = express.Router();

// create an author
router.post("/authors", async (req, res) => {
  try {
    const authorFound = await Author.findOne({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    });
    if (authorFound) {
      return res
        .status(400)
        .json({ message: "The author is registered already" });
    }

    const author: IAuthor = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    console.error(error);
  }
});

export default router;
