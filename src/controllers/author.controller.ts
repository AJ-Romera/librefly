import { Request, Response } from "express";
import Author, { IAuthor } from "../models/author.model";

export const createAuthor = async (req: Request, res: Response) => {
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
};

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors: IAuthor[] = await Author.find();
    authors && authors.length > 0
      ? res.status(200).json(authors)
      : res.status(400).json({ message: "No authors found" });
  } catch (error) {
    console.error(error);
  }
};

export const getAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.authorId;

    if (authorId.length < 24 || authorId.length > 24) {
      res
        .status(404)
        .json({ message: "Error: The id should be 24 characters long" });
    } else {
      const author = await Author.findById(authorId);
      author
        ? res.status(200).json(author)
        : res
            .status(404)
            .json({ message: "Author not found with the given id" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.authorId;
    const authorUpdated = await Author.findByIdAndUpdate(authorId, req.body, {
      new: true,
    });

    authorUpdated
      ? res.status(200).json(authorUpdated)
      : res.status(400).json({
          message:
            "Error: Could not update the author. The given id or the data is not correct",
        });
  } catch (error) {
    console.error(error);
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.authorId;

    if (authorId.length < 24 || authorId.length > 24) {
      res
        .status(404)
        .json({ message: "Error: The id should be 24 characters long" });
    } else {
      const author = await Author.findByIdAndDelete(authorId);
      author
        ? res.status(200).json(author)
        : res
            .status(404)
            .json({ message: "Author not found with the given id" });
    }
  } catch (error) {
    console.error(error);
  }
};
